import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hjem from './components/hjem';
import Bestill from './components/bestill';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/bestill" element={<Bestill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
