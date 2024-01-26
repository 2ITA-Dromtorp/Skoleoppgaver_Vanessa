import React, { useState } from 'react';
import "./firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
        
  return (
    <div className = "content">
            <div className = "child">
                <form className = "form" onSubmit={""}/*endre til handleSubmit?*/>
                
                    <div className = "login">
                        <input type = "email" className = "form-control"  placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }/>
                        <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                    </div>
                    <div className = "login">
                        <input type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }/>
                        <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                    </div>
                    <div className = "button">
                        <button type = "submit" /*onClick = {(e) => loginWithUsernameAndPassword(e)}*/>Submit</button>
                    </div>
                    <div className = "under-content">
                        <span>Need to sign up for an account? <Link to = "./signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    
  )
}

export default Login

/*
{ "" !== notice &&
/*<div className = "alert alert-warning" role = "alert">
    { notice }    
</div>*/ 