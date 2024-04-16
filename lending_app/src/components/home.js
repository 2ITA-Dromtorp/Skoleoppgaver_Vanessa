import './../App.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <navbar>Home</navbar>

            <div className='home'>
                <div className='content'>
                    <p>Velkommen! Hva vil du gjøre?</p>
                    <Link to="/lending"><button>Lån utstyr</button></Link>
                    <Link to="/store"><button>Sjekk lager</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Home;