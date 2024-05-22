import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Lending from './components/lending';
import Login from './components/login';
import AdminLogin from './components/loginAdmin';
import Admin from './components/admin';
import Store from './components/store';
import Signup from './components/signup';
import LoginDisplay from './components/welcome';
import Utlan from './components/utlan';
import Elev from './components/elev';
import Create from './components/create';
import Requests from './components/requests';



function App() {


  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginDisplay />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/create" element={<Create />} />
      <Route path="/borrowed" element={<Utlan />} />
      <Route path="/requests" element={<Requests />} />
      <Route path='/home' element={<Home />} />
      <Route path="/lending/:id" element={<Lending />} />
      <Route path='/store' element={<Store />} />
      <Route path='/elev' element={<Elev />} />
      <Route path="/addStudent" element={<Signup />} />

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
