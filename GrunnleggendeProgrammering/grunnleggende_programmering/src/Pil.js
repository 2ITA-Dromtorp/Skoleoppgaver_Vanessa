import {useState} from 'react';
import arrowup from './images/up.png';
import arrowdown from './images/down.png';

// En komponent som heter Pil. Den eksporteres.
export default function Pil() {

    const [count, setCount] = useState(0);

    function CountOpp() {
      setCount(count + 1);
    }
    function CountNed() {
      setCount(count - 1);
    }
  
    function MyButton({ onClick, children }) {
        return (
          <>
            
          <button onClick={onClick}>
            {children}
          </button>
            </>
          
        );
    }

    
    return (
        <div className='box'>
            <MyButton count={count} onClick={CountOpp}><img src={arrowup} alt='arrow up'/></MyButton>
            <p> {count} </p>
            <MyButton count={count} onClick={CountNed}><img src={arrowdown} alt='arrow down'/></MyButton>
        </div>
    )

}
