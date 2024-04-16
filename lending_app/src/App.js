import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import back from './images/back.png';
import Home from './components/home';
import Lending from './components/lending';
import Login from './components/login';
import Store from './components/store';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
            
      <navbarTop>
        <Link to="/" className='back' ><img src={back} alt="logo"/><p>Hjem</p></Link>
        
      </navbarTop>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lending" element={<Lending />} />
      <Route path='/login' element={<Login />} />
      <Route path='/store' element={<Store />} />

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
