import '../App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function () {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [passord, setPassord] = useState("");

    const handleSubmit = () => {
        console.log(username, number, mail, passord);


    const dataToSend = {
        username: username,
        number: number,
        mail: mail,
        passord: passord
    }
        fetch('/create-user', {
            method:'POST',
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
                        const data = await res.json();
                        if (res.status===200) {
                            console.log(data);
                            navigate("/hjem")

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
            <h2 className='under_nav'>Lag en brukerkonto</h2>
            <div className='signup_input'>
                <p>Opprett ett brukernavn</p>
                <input type='text' value={username} onInput={e => setUsername(e.target.value)}/>  
                <p>Oppgi mobilnummeret ditt</p>
                <input type='number' value={number} onInput={e => setNumber(e.target.value)}/>  
                <p>Oppgi e-post adressen din</p>
                <input type='email' value={mail} onInput={e => setMail(e.target.value)}/>  
                <p>Opprett ett passord</p>
                <input type='password' value={passord} onInput={e => setPassord(e.target.value)}/>  
                <button className='button_style' onClick={handleSubmit}>Opprett brukerkonto</button>
             </div>
             <h5 className='under_content'>Har du allerede en brukerkonto? <a href="/">Logg inn</a></h5>
        </>

    )

}