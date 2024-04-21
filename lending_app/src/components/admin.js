import { useState, useEffect} from 'react'
import back from './../images/back.png';
import { Link } from 'react-router-dom'

function Admin() {

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
        <navbar>Home - Admin</navbar>

        <div className='home'>
        <p>Velkommen! Hva vil du gjøre?</p>
            <div className='adminDisplay'>

                    <Link to="/store"><button>Sjekk lager</button></Link>
                    <Link to="/borrowed"><button>Se utlån</button></Link>
                    <Link to="/requests"><button>Se forespørseler</button></Link>
                    <Link to="/elev"><button>Se elever</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Admin