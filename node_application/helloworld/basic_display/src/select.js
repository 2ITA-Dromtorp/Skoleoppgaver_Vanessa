import axios from 'axios';
import { useState, useEffect } from 'react';
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
    
   
    return (
        <div className='content'>
            <h1>Her er select</h1>
            <table className='styled_table'>
                <thead>
                    <tr>
                        <th>ElevID</th>
                        <th>Fornavn</th>
                        <th>Etternavn</th>
                        <th>DatamaskinID</th>
                        <th>Hobby</th>
                        <th>Klasse</th>
                        <th>Kjonn</th>
                    </tr>
                </thead>
                <tbody>
                    {customersData.map((customer) => (
                    <tr key={customer.ElevID}>
                        <td>{customer.ElevID}</td>
                        <td>{customer.Fornavn}</td>
                        <td>{customer.Etternavn}</td>
                        <td>{customer.DatamaskinID}</td>
                        <td>{customer.Hobby}</td>
                        <td>{customer.Klasse}</td>
                        <td>{customer.Kjonn}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}