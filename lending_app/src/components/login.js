import '../App.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


export default function () {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [passord, setPassord] = useState("");

    const handleSubmit = () => {
        console.log(username, passord);


    const dataToSend = {
        brukernavn: username,
        passord: passord,
        type: 'elev'
    }
        fetch('/api/login', {
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
                        setJWT(data.token)
                        setUserInfo(data.user)

                        navigate("/home")
                }})
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });
        
    }

    function setJWT(token) {
        Cookies.set('token', token);
    }

    function setUserInfo(user) {

        localStorage.setItem("user", JSON.stringify(user));
        
    }


    return (
        <> 
        <navbar>Logg inn</navbar>
            <div className='login'>
                <p>Skriv inn brukernavn</p>
                <input type='text' value={username} onInput={e => setUsername(e.target.value)}/>  
                <p>Skriv inn passord</p>
                <input type='password' value={passord} onInput={e => setPassord(e.target.value)}/>  
                <button className='login_button' onClick={handleSubmit}>Logg inn</button>
             </div>

        </>
    )
       
}