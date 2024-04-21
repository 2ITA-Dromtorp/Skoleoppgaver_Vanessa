import '../App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from './../images/back.png';
import { Link } from 'react-router-dom'

export default function () {

    const navigate = useNavigate();

    const [fornavn, setFornavn] = useState("");
    const [etternavn, setEtternavn] = useState("");
    const [telefon, setTelefon] = useState("");
    const [klasseId, setKlasseId] = useState("");
    const [brukernavn, setBrukernavn] = useState("");
    const [passord, setPassord] = useState("");
    const [elevMail, setElevMail] = useState("");

    const handleSubmit = () => {
    

    const dataToSend = {
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        klasseID: klasseId,
        brukernavn: brukernavn,
        passord: passord,
        elevMail: elevMail
    }
        fetch('/api/addStudent', {
            method:'POST',
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
                        const data = await res.json();

                        console.log('hhrer')
                        if (res.status===200) {
                            console.log(data);
                            navigate("/elev")

                        }  if (res.status===400) {
                            alert("Du må fylle ut alle feltene")
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });   
                 }

    return(
        <>        
        <navbartop>
            <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>
        
            <navbar>Lag en elev</navbar>
            <div className='student'>
                <div className='content'>
                    <div className='elev-form'>
                        <p>Elevens fornavn:</p>
                        <input type='text' value={fornavn} onInput={e => setFornavn(e.target.value)}/>

                        <p>Elevens etternavn:</p>
                        <input type='text' value={etternavn} onInput={e => setEtternavn(e.target.value)}/>

                        <p>Elevens telefonnummer:</p>
                        <input type='number' value={telefon} onInput={e => setTelefon(e.target.value)}/>  

                        <p>Elevens klasse:</p>
                        <input type='number' value={klasseId} onInput={e => setKlasseId(e.target.value)}/>

                        <p>Elevens brukernavn:</p>
                        <input type='text' value={brukernavn} onInput={e => setBrukernavn(e.target.value)}/>  

                        <p>Elevens passord</p>
                        <input type='password' value={passord} onInput={e => setPassord(e.target.value)}/>

                        <p>Elevens Mail-adresse:</p>
                        <input type='email' value={elevMail} onInput={e => setElevMail(e.target.value)}/>  
                        
                        <button  onClick={handleSubmit}>Opprett elev</button>
                    </div>
                </div>
             </div>
        </>

    )

}