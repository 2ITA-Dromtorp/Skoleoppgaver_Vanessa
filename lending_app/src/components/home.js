import './../App.css';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './table.css'
import back from './../images/back.png';
function Home() {

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
            <Link to="/home" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        </navbartop>

        <navbar>Hjem</navbar>
    
        <div className='home'>
        
            <div className="content">
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Utstyr-ID</th>
                            <th>Utstyr</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {utstyr.map((data) => (
                        <tr key={data.UtstyrID}>
                            <td>{data.UtstyrID}</td>
                            <td>{data.UtstyrNavn}</td>
                            <td>            
                                <Link to={`/lending/${data.UtstyrID}`}><button>Lån utstyr</button></Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Home