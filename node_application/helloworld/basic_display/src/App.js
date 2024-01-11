import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Select from './select';
import CreateStudent from './createStudent';
import Update from './update';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete" element={""} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
