import {useRef, useState} from 'react';
import './App.css';

const Test = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault(); // Gjør at siden ikke refresher siden.
    };

    // få tilgang til inputverdiene
    console.log('navn', firstRef.current.value);
    console.log('tilbakemelding', lastRef.current.value);

    const newmess = `${firstRef.current.value} ${lastRef.current.value}`
    setMessage((prevList) => [...prevList, newmess]);

    // Fjerner inputverdier i form
    event.target.reset();


  return (
    <div className="content">
        <div className="meldeFeil">
            <h3>Gi oss en tilbakemelding</h3>

            <form onSubmit={handleSubmit}>
                <input
                ref={firstRef}
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Navn"
                />
                <br />
                <input
                ref={lastRef}
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Gi oss din tilbakemelding"
                />
                <br />

            </form>
            <button className="send" type="submit">Send inn</button>


            </div>

            <div className='ticketBox'>
                <h3>Innmeldte meldinger</h3>

                <div className='ticket'>
                    <div className='box'>
                        <p>{message}</p>
                    </div>
                    <button className='solve' type="submit">Løs</button>
                </div>

            </div>

    </div>
  );
};
export default Test;
