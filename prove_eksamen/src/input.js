import './App.css';
//Bruker inputRef for å huske informasjon, istedenfor å trigge en ny render
import {useRef} from 'react';


export default function Input() {

    const Test = () => {
        const inputRef = useRef(null);
      
        function handleClick() {
          console.log(inputRef.current.value);
        }
    
    return (
        <div>
            <div className="content">
          <div className="meldeFeil">
          <h3>Gi oss en tilbakemelding</h3>
          <input inputRef
            type="text"
            id="message"
            name="message"> 
          </input>
          <button onClick={handleClick}>Log message</button>
          </div>

          <div className='ticket'>
            <h3>Innmeldte meldinger</h3>

              <div className='box'>

              </div>
          </div>

      </div>
        </div>
    )
}

};
