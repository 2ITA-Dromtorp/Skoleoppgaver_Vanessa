import { Route, Routes } from 'react-router-dom';
import './App.css';
import Elev from './elev';
import Klassekart from './klassekart';
import Profile from './profile';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Klassekart/>}/>
      <Route path="/:profile" element={<Profile/>}/>
      <Route/>
    </Routes> 
    

  
   
  );
}

export default App;
