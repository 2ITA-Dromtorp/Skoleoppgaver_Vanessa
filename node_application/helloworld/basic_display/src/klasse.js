import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './create.css'

function Klasse() {

    const [student, setStudent] = useState([]);
    useEffect(() => {
        getStudentData();
    }, []);
    const getStudentData = () => {
        axios
            .get("http://localhost:3000/klasse")
            .then(response => { setStudent(response.data) })
            .catch(error => console.log(error));
    };

  return (
    <div className='content'>
        <Link to="/" className='button-top'>Tilbake</Link>
        <h2>Programfag</h2>

            <table className='styled-table'>
                <thead>
                    <tr>
                    <th>ProgramfagID</th>
                    <th>Programfag</th>
                    <th>Lærer</th>
                    <th>Klasserom</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((data) => (
                    <tr key={data.ProgramfagID}>
                        <td>{data.ProgramfagID}</td>
                        <td>{data.Programfag}</td>
                        <td>{data.Lærer}</td>
                        <td>{data.Klasserom}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Klasse