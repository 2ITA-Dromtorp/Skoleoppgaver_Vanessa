import '../App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from './../images/back.png';
import { Link } from 'react-router-dom'

export default function () {

    const navigate = useNavigate();

    const [utstyrNavn, setUtstyrNavn] = useState("");


    const handleSubmit = () => {
    

    const dataToSend = {
        utstyrNavn: utstyrNavn,
    
    }
        fetch('/api/create', {
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
                            navigate("/store")

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
        
            <navbar>Legg til utstyr</navbar>
            <div className='store'>
                <div className='content'>
                    <div className='lending-form'>
                        <p>Utstyrnavn</p>
                        <input type='text' value={utstyrNavn} onInput={e => setUtstyrNavn(e.target.value)}/>

                        <button  onClick={handleSubmit}>Legg til utstyr</button>
                    </div>
                </div>
             </div>
        </>

    )

}