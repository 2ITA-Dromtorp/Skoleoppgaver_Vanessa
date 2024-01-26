import { Link, useNavigate } from "react-router-dom";
import "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function Sigunup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  return (
    <div className='content'>
        <div className='child'></div>
    </div>
  )
}

export default Sigunup