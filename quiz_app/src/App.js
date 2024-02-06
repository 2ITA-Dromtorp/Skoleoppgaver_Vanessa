import './App.css';
import Quiz from './Quiz';
import axios from 'axios';
import { ItQuizz } from './questions';

function App() {

  function Defenestrering (){
    axios.get("/")
    .then(res => {

    })
  }


  return (
    <div className="App">
     <p>Quiz-app</p>
     < Quiz questions={ItQuizz.questions}/>
    </div>
  );
}

export default App;
