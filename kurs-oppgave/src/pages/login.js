import '../App.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function () {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [passord, setPassord] = useState("");

    const handleSubmit = () => {
        console.log(username, passord);


    const dataToSend = {
        username: username,
        passord: passord
    }
        fetch('/login', {
            method:'POST',
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
            if(res.status===401) {
                alert("Feil brukernavn eller passord")
            }
            if(res.status===200) {
                        const data = await res.json();                    
                        console.log(data)
                        navigate("/hjem")
                }})
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });
        
    }



    return (
        <> 
        <h2 className='under_nav'>Logg inn</h2>
            <div className='signup_input'>
                <p>Skriv inn brukernavn</p>
                <input type='text' value={username} onInput={e => setUsername(e.target.value)}/>  
                <p>Skriv inn passord</p>
                <input type='password' value={passord} onInput={e => setPassord(e.target.value)}/>  
                <button className='login_button' onClick={handleSubmit}>Logg inn</button>
             </div>

             <h5 className='under_content'>Har du ikke en brukerkonto? <a href="/signup">Opprett brukerkonto</a></h5>
        </>
    )
       
}