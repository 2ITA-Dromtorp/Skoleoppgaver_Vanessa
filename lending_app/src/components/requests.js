import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import back from './../images/back.png';
import { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function Requests() {

    const navigate = useNavigate()
    const [utstyr, setUtstyr] = useState([]);
    useEffect(() => {
        getPendingData();
    }, []);

    const getPendingData = () => 
      {fetch('/api/pending-requests', {
      method:'GET',
      headers:{
        "content-type":"application/json",
      }
    })
    .then(response => response.json())
            .then(data => setUtstyr(data)) 
            .catch(error => console.log(error));
          }

          // const handleAccept = () => { 
          //   fetch('/api/accept-request', {
          //     method:'PUT',
          //     headers:{
          //       "content-type":"application/json",
          //     },
          //     body:JSON.stringify({"UtstyrID":utstyr.UtstyrID, "ElevID":utstyr.ElevID}),
          //   })
          //   .then 
          //   navigate('/admin')
          // }
          const handleOK = () => {
            navigate('/admin')
          }
  
          
     
          
  return (
    <div>
         <navbartop>
            <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>
        <navbar>Se forespørseler fra elever</navbar>
        <div className='home'>
          <div className="content">
                  <table className='styled-table'>
                      <thead>
                          <tr>
                              <th>Utstyr</th>
                              <th>ElevID</th>
                              <th></th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          {utstyr.map((data) => (
                              <tr key={data.UtstyrID}>
                                  <td>{data.UtstyrID}</td>
                                  <td>{data.ElevID}</td>
                                  <td><button onClick={handleOK}>Godkjenn</button></td>   
                              </tr>
                                  ))}
                          </tbody>
                  </table>
              </div>
            </div>
    </div>
  )
}

export default Requests