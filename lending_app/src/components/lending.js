import React from 'react'
import './../App.css'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import back from './../images/back.png';
import { Link, useSearchParams } from 'react-router-dom'

function Lending() {
  const [searchParams] = useSearchParams("")
  const [utstyr, setUtstyr] = useState();
  const [elev, setElev] = useState(JSON.parse(localStorage.getItem("user"))?.brukernavn);
  const [dato, setDato] = useState("");
  
  const {id} = useParams()
  const navigate = useNavigate()
console.log()


  
fetch('/api/equipment/' + 1, {
  method:'GET',
  headers:{
    "content-type":"application/json",
  }

})
.then(res => 
  {
    return res.json()
  })
  .then(res => 
    {
      setUtstyr(res.utstyrNavn)
    })
  
  .catch(err => console.log(err)) 
  const handleSubmit = (e) => {

    e.preventDefault()


    fetch('/api/lending' +id, {
      method:'PUT',
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({"UtstyrID":utstyr, "ElevID":elev, "Dato":dato }),
  })
  .then(res => 
      {console.log(res.data)
      navigate('/admin')
      }).catch(err => console.log(err)) 
}

  return (
    <div>

    <navbartop>
        <Link to="/home" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
    </navbartop>
      
    <navbar>Lån Utstyr</navbar>

    <div className='lending'>

        <div className='content'>
            <div className='lending-form'>
              <form  onSubmit={handleSubmit} action='/' method='POST'>
                  <div className='form-group1'>
                      <label htmlFor="">Utstyr:</label>
                      <input disabled="true" type="text"className='form-control' value={utstyr}/>
                  </div>
                  <div className='form-group1'>
                      <label htmlFor="">Elev:</label>
                      <input disabled="true" type="text" className='form-control' value={elev}/>
                  </div>
                  <div className='form-group1'>
                      <label htmlFor="">Velg dato:</label>
                      <input type="date" className='form-control' onChange={(e) => setDato(e.target.value)}/>
                  </div>
                

                <button>Send forespørsel</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Lending