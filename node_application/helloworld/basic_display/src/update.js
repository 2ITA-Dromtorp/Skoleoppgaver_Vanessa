/*
import axios from 'axios';
import { useState, useEffect } from 'react';
import BrowserRouter, { Link } from 'react-router-dom';
import Update2 from './update2';
import './table.css';

export default function Select() {

    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        getCustomersData();
    }, []);
    const getCustomersData = () => {
        axios
            .get("http://localhost:3000/")
            .then(response => { setCustomersData(response.data) })

            .catch(error => console.log(error));
    };
    
   

        const [content, setContent] = useState(<updatPush />);
      function updatPush() {
          setContent(<Update2 />);
        }

    return (
        <div className='content'>
            <h1>Her er update</h1>
            <table className='styled_table'>
                <thead>
                    <tr>
                        <th>Fornavn</th>
                        <th>Etternavn</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customersData.map((customer) => (
                    <tr key={customer.ElevID}>
                        <td>{customer.Fornavn}</td>
                        <td>{customer.Etternavn}</td>
                        <td><button className='button' onClick={updatPush}>Update</button></td>

                        <td>{content}</td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}*/

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './create.css'
import { Link } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [machine, setMachine] = useState('')
    const [hobby, setHobby] = useState('')
    const [klasse, setklasse] = useState('')
    const [kjonn, setKjonn] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/update/'+id, {"Fornavn":name, "Etternavn":lastname, "DatamaskinID":machine, "Hobby":hobby, "Klasse":klasse, "Kjonn":kjonn})
        .then(res => 
            {console.log(res.data)
            navigate('/')
            }).catch(err => console.log(err))
    }
  return (
    <div className='create-student'>
        <Link to="/" className='button-top'>Tilbake</Link>
        <div className='create-student-form'>
            <form onSubmit={handleSubmit} action='/create' method='POST'>
                <h2>Oppdater elev</h2>
                <div className='form-group1'>
                    <label htmlFor="">Fornavn:</label>
                    <input type="text" placeholder='Fyll inn fornavn' className='form-control' onChange={(e) => setName(e.target.value)}
 />
                </div>
                <div className='form-group1'>
                    <label htmlFor="">Etternavn:</label>
                    <input type="text" placeholder='Fyll inn etternavn' className='form-control' onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className='form-group1'>
                    <label htmlFor="">Datamaskin:</label>
                    <select onChange={(e) => setMachine(e.target.value)}>
                        <option value="0">Velg maskin</option>
                        <option value="1">Apple</option>
                        <option value="2">Lenovo</option>
                        <option value="3">HP</option>
                    </select>
                </div>
                <div className='form-group1'>
                    <label htmlFor="">Hobby:</label>
                    <input type="text" placeholder='Fyll inn hobby' className='form-control' onChange={(e) => setHobby(e.target.value)} />
                </div>
                <div className='form-group1'>
                <label htmlFor="">Klasse:</label>
                    <select onChange={(e) => setklasse(e.target.value)}>
                        <option value="0">Velg klasse</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    
                </div>
                <div className='form-group1'>
                    <label htmlFor="">Kjønn:</label>
                    <select onChange={(e) => setKjonn(e.target.value)}>
                        <option value="0">Velg kjønn</option>
                        <option value="G">Mann</option>
                        <option value="J">Kvinne</option>
                    </select>
                    
                </div>
                <button className='button'>Oppdater</button>
            </form>
        </div>

    </div>
  )
}

export default Update