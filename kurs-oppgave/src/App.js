import logo from './images/dromtorp-logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Hjem  from "./pages/hjem";
import Data from "./pages/data";
import Norsk from "./pages/norsk";
import Heim from "./pages/heim";
import Gym from "./pages/gym";
import Book from "./pages/book";

function App() {
  return (
    <>
   
       
    <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path='/' element={<Hjem />}/>
        <Route path='/:datakunnskap' element={<Data />}/>
        <Route path='/norsk' element={<Norsk />}/>
        <Route path='/heimkunnskap' element={<Heim />}/>
        <Route path='/kroppsøvning' element={<Gym />}/>
        <Route path='/kursbooking' element={<Book />}/>


      </Routes>
      
      <footer>
        <div className='kontakt_info'>
              <h6>Kontakt oss</h6>
              <p>Telefon</p>
              <a href='tel:64914600'>64 91 46 00</a>
              <p>Epost</p>
              <a href='mailto:dromtorpvgs@viken.no'>Send oss en e-post</a>
          </div>
      </footer>
    </div>
    </>
  );
}

export default App;
