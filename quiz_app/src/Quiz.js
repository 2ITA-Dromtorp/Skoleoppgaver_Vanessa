import React from 'react'
import { useState} from 'react'
import {resultInitialState} from './questions'

function Quiz({questions}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);


    const {question, choices, correctAnswer}= questions[currentQuestion] 

    const onAnswerClick = (answer, index) => {
        setAnswerIndex(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };
    const onClickNext = () => {
        setAnswerIndex(null);
        setResult((prev) =>
        answer 
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
        }:
        {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1
        }
        )
        if(currentQuestion !== questions.length -1){
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        };
    };
    const onClickTryAgain = () => {
       setResult(resultInitialState); 
       setShowResult(false);
    }


  return (
    <div className='quiz-content'>
        {!showResult ? (
        <>
        <span className='active-question'>{currentQuestion + 1}</span>
        <span className='total-question'>/{questions.length}</span>
        <h2>{question}</h2>

        <ul>
            {
                choices.map((answer, index) => (
                    <li  onClick={()=> onAnswerClick(answer, index)} key={answer} className={answerIndex === index ? 'select-answer' : null}>
                        {answer} fiks farge
                    </li>
                ))
            }
        </ul>
        <div className='footer'>
            <button onClick={onClickNext} disabled={answerIndex === null}>{currentQuestion === questions.length - 1 ?'Ferdig': 'Neste'}</button>
        </div>
        </>
        ) : (
        <div className='result'>
            <h3>Resultater</h3>
            <p>Spørsmål totalt: <span>{questions.length}</span></p>
            <p>Score totalt: <span>{result.score}</span></p>
            <p>Riktige svar: <span>{result.correctAnswer}</span></p>
            <p>Feile svar: <span>{result.wrongAnswer}</span></p>
            <button onClick={onClickTryAgain}>Prøv på nytt</button>
            </div>
             )}
    </div>
  );
};

export default Quiz