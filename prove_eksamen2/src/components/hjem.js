import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

//prøv å bruke json web token til å huske mat rett
//prøv å gjøre mulig å gjøre dynamisk på antall mat retter som er tilgjengelig


function Hjem() {
    const [meny, setMeny] = useState([]);
    
    useEffect(() => {
        const produktIdFromSession = JSON.parse(sessionStorage.getItem("produktId")) || sessionStorage.getItem("produktId");
        if(produktIdFromSession==null || produktIdFromSession.length && produktIdFromSession.length<1) sessionStorage.setItem("produktId",JSON.stringify([]));

        axios.get('/api/meny').then((response) => {
            console.log(response.data)
            setMeny(response.data)
            console.log(meny)
        })
   
    }, [])

    function bestill(e) {
        const arrayOfId = JSON.parse(sessionStorage.getItem("produktId"));
        console.log(arrayOfId)
        console.log(e.target.id)
        arrayOfId.push(e.target.id)
        sessionStorage.setItem("produktId", JSON.stringify(arrayOfId));
 
    }  

  return (
    <div>
        <div className='over-header'>
            <Link to={"/bestill"}><button to="/bestill">Handlevogn</button></Link>
        </div>
        <div className="header">
            <p>Drømtorp Kantina</p>
        </div>

        <div className='content'>
            
        {meny.map((meny) => (
                <div className='product'>
                    <p>{meny.produktNavn}</p> 
                    <p>{meny.produktPris}kr</p>
                    <img className='product-img' src={meny.produktBilde} />
                    <button id={meny.produktId} onClick={(e) => bestill(e)}>Bestill</button>
                    <p>{meny.antall} stk igjen</p>
                </div>
             ))}

            
        </div>
    </div>
  )
}

export default Hjem