import '../App.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Tabell from './tabell';


export default function () {

    const {kurs} = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");

    const handleSubmit = () => {
        console.log(username, number, mail, kurs);


    const dataToSend = {
        username: username,
        number: number,
        mail: mail,
        kurs: kurs
    }
        fetch('/bookKurs', {
            method:'POST',
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
                        const data = await res.json();
                        console.log(res.status)
                        if (res.status===200) {
                            console.log(data);
                            navigate("/bekreftelse")

                        }  else if (res.status===400) {
                            alert("Du må fylle ut alle feltene")
                        } else if (res.status===409) {
                            alert("Du er allerede påmeldt dette kurset")
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });   
                 }


    return (
        <>
        <h2 className='under_nav'>Booking av kurs</h2>
        <h4 className='over_content'>Bekreft personlig informasjon for å fullføre booking av kurs</h4>
        <div className='personlig_info'>
            <p>Skriv inn brukernavn</p>
            <input type="text" value={username} onInput={e => setUsername(e.target.value)}></input>
            <p>Gjenta telefonnummeret</p>
            <input type="number" value={number} onInput={e => setNumber(e.target.value)}></input>
            <p>Gjenta e-post adressen din</p>
            <input type="email" value={mail} onInput={e => setMail(e.target.value)}></input>
        </div>
        <div className='praktisk_informasjon'>
            <h6>Praktisk informasjon om kurset</h6>
            <p>Kurset ditt begynner Mandag 8 Januar og varer til og med Fredag 8 Mars.</p>
            <p>Under finner du timeplanen din</p>
            <Tabell />
        </div>
        <div className='under_info'>
            <input onClick={() => handleSubmit()} className='button_style' type="submit" value="Book kurs" />        
        </div>

        </>
    )
}