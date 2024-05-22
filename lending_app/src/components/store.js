import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './table.css'
import back from './../images/back.png';

function Store() {

    const [utstyr, setUtstyr] = useState([]);
    useEffect(() => {
        getUtstyrData();
    }, []);
    const getUtstyrData = () => {

        fetch('/api/home', {
            method:'GET',
            headers:{
              "content-type":"application/json",
            }
        })
            .then(response => response.json())
            .then(data => setUtstyr(data)) 
            .catch(error => console.log(error));
        
    };

  return (
    <div>
        <navbartop>
        <Link to="/admin" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>

        </navbartop>
        <navbar>Utstyr</navbar>
    
        <div className='store'>
        
        {/* <Link to="/create"><button className='create_button'>Legg til utstyr</button></Link> */}

            <div className="content">

                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Utstyr-ID</th>
                            <th>Utstyr</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utstyr.map((data) => (
                        <tr key={data.UtstyrID}>
                            <td>{data.UtstyrID}</td>
                            <td>{data.UtstyrNavn}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Store