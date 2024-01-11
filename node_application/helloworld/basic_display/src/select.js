import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css';
import './App.css';
import { Link } from 'react-router-dom';

export default function Select() {
    
    const [student, setStudent] = useState([]);

    useEffect(() => {
        getStudentData();
    }, []);
    const getStudentData = () => {
        axios
            .get("http://localhost:3000/")
            .then(response => { setStudent(response.data) })
            .catch(error => console.log(error));
    };
    
    const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:3000/elev/'+id)
            window.location.reload()
        } catch(error){
            console.log(error)
        }

    }

  return (
    <div className='content'>
        <div className='select'>
            <Link to="/create" className='add-student'>Legg til elev</Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                    <th>ElevID</th>
                    <th>Fornavn</th>
                    <th>Etternavn</th>
                    <th>DatamaskinID</th>
                    <th>Hobby</th>
                    <th>Klasse</th>
                    <th>Kjonn</th>
                    <th>Verktøy</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((data) => (
                    <tr key={data.ElevID}>
                        <td>{data.ElevID}</td>
                        <td>{data.Fornavn}</td>
                        <td>{data.Etternavn}</td>
                        <td>{data.DatamaskinID}</td>
                        <td>{data.Hobby}</td>
                        <td>{data.Klasse}</td>
                        <td>{data.Kjonn}</td>
                        <td>
                            <Link to={`/update/${data.ElevID}`} className='button'>Update</Link>
                            <button className='button' onClick={ e => handleDelete(data.ElevID)}>Delete</button>
                            
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
  )
}
