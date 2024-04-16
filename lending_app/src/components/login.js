import './../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

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
    <div>
    <navbar>Login</navbar>

        <div className='login'>
            <div className='content'>
                <div className='login-form'>
                    <label>Brukernavn</label>
                    <input type="text" value={username} onInput={e => setUsername(e.target.value)}></input>

                    <label>Passord</label>
                    <input type="password" value={passord} onInput={e => setPassord(e.target.value)}></input>

                    <button className='login_button' onClick={handleSubmit}>Logg inn</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login