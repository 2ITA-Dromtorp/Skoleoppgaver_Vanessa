import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import back from './../images/back.png';
function Utlan() {
    const [utlan, setUtlan] = useState([]);
    useEffect(() => {
        getUtlanData();
    }, []);
    const getUtlanData = () => {

        fetch('/api/borrowed', {
            method:'GET',
            headers:{
              "content-type":"application/json",
            }
        })
            .then(response => response.json())
            .then(data => setUtlan(data)) 
            .catch(error => console.log(error));
        
    };

  return (
    <div>
        <navbartop>
            <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>
        <navbar>Utlånt Utstyr</navbar>
    
        <div className='store'>
        
            <div className="content">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Utstyr-ID</th>
                            <th>Elev-ID</th>
                            <th>Dato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utlan.map((data) => (
                        <tr key={data.UtstyrID}>
                            <td>{data.UtstyrID}</td>
                            <td>{data.ElevID}</td>
                            <td>{data.Dato}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Utlan