import React from 'react'
import back from './../images/back.png';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Elev() {

    const [elev, setElev] = useState([]);
    useEffect(() => {
        getElevData();
    }, []);
    const getElevData = () => {

        fetch('/api/student', {
            method:'GET',
            headers:{
              "content-type":"application/json",
            }
        })
            .then(response => response.json())
            .then(data => setElev(data)) 
            .catch(error => console.log(error));
        
    };
    // const handleDelete = (id) => {
    //     fetch('/api/elev/'+id, {
    //             method: 'GET',
    //             headers: {
    //                 "content-type": "application/json",
    //             } 
    //         })
    //         .then(response => response.json())
    //         .then(data =>{
    //            console.log(data)
    //             if(data.status === 'ok'){
    //                 return getElevData();
    //             }
    //             return 

    //         }) 
    //         .catch(error => console.log(' test', error));


        

    //     }
    
  return (
    <div>
        <navbartop>
            <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>
        
        <navbar>Elever på Drømtorp Videregående Skole</navbar>
        
        <div className='student'>
            <Link to="/addstudent"><button className='add_button'>Legg til elev</button></Link>
            <div className="content">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Elev-ID</th>
                            <th>Brukernavn</th>
                            <th>Fornavn</th>
                            <th>Etternavn</th>
                            <th>Telefon</th>
                            <th>Epost</th>
                            <th>Klasse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elev.map((data) => (
                            <tr key={data.elevID}>
                                <td>{data.elevID}</td>
                                <td>{data.brukernavn}</td>
                                <td>{data.fornavn}</td>
                                <td>{data.etternavn}</td>
                                <td>{data.telefon}</td>
                                <td>{data.elevMail}</td>
                                <td>{data.klasseID}</td>
                            </tr>
                                ))}
                        </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Elev