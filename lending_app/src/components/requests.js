import React from 'react'
import { Link } from 'react-router-dom'
import back from './../images/back.png';
import { useEffect, useState } from 'react'

function Requests() {

    const [utstyr, setUtstyr] = useState([]);

    fetch('/api/equipments', {
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

            console.log(res)
     
            setUtstyr(res)
        
          })
        
        .catch(err => console.log(err)) 
  return (
    <div>
         <navbartop>
            <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>
        <navbar>Se forespørseler fra elever</navbar>
        <div className="content">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Utstyr</th>
                            <th>Brukernavn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utstyr.map((data) => (
                            <tr key={data.utstyrID}>
                            
                      
                                <td>  
                                  {data.utstyrID}          
                                </td>
                            </tr>
                                ))}
                        </tbody>
                </table>
            </div>
    </div>
  )
}

export default Requests