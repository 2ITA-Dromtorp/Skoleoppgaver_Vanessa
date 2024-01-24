import './App.css'
import { useState } from 'react';


export default function () {

    /*const navigate = useNavigate();

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
*/


    return (
        <div className='content'> 
          <div className='child'>
            <h2 className='h2'>Logg inn</h2>
            <div className='signup-input'>
                <p>Skriv inn brukernavn</p>
                <input type='text' />  
                <p>Skriv inn passord</p>
                <input type='password'/>  
                <button className='login_button'>Logg inn</button>
             </div>

             <h5 className='under-content'>Har du ikke en brukerkonto? <a href="/signup">Opprett brukerkonto</a></h5>
            </div>
          </div>
    )
       
}