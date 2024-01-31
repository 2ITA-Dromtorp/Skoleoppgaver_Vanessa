import { Link, useNavigate } from "react-router-dom";
import "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function Sigunup () {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        console.log(email, password);
    }

    return(
        <div className="content">        
            <h2 className='under_nav'>Lag en brukerkonto</h2>
            <div className='child'>
                <p>Opprett ett brukernavn</p>
                <input type='email' value={email} onInput={e => setEmail(e.target.value)}/>  
                <p>Opprett ett passord</p>
                <input type='password' value={password} onInput={e => setPassword(e.target.value)}/>  
                <button className='button_style' onClick={handleSubmit}>Opprett brukerkonto</button>
             </div>
             <h5 className='under_content'>Har du allerede en brukerkonto? <a href="/">Logg inn</a></h5>
        </div>

    )

}