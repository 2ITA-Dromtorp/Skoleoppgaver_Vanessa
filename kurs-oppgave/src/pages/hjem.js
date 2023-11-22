import '../App.css';
import data from '../images/data.jpg'
import norsk from '../images/norsk.jpg'
import heim from '../images/heim.jpg'
import gym from '../images/gym.jpg'


export default function() {
    return(
        <>
        <h2 className='under_nav'>Velkommen til voksenopplæring på Drømtorp Vidregående Skole</h2>
        <h4 className='over_content'>Trykk på det kurset du ønsker å ta og book en time</h4>

        <div className='content'>
            <div className='kurs'>
                <p>Datakunnskap</p>
                <img src={data} className="body_img" alt="Bilde av en person som skriver på den beste PC i verden"/>
                </div>
            <div className='kurs'>
                <p>Norsk</p>
                <img src={norsk} className="body_img" alt="Bilde av ett norsk flagg på en båt med sjø og land i bakgrunn"/>
                </div>
            <div className='kurs'>
                <p>Heimkunnskap</p>
                <img src={heim} className="body_img" alt="Bilde av en tallerken med masse forskjellige og fargerrike grønnsaker"/>
                </div>
            <div className='kurs'>
                <p>Kroppsøvning</p>
                <img src={gym} className="body_img" alt="Bilde av to personer som står klare til å løpe på en løpebane"/>
                </div>
        </div>

        <h5 className='under_content'>NB: ikke mulig å ta booke samme kurs flere ganger</h5>
        </>
        )};
        
