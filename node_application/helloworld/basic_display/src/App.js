import {useState} from 'react';


import './App.css';
import Select from './select.js';
import Update from './update.js';
import Insert from './insert.js';
import Delete from './delete.js';

function App() {

  const [content, setContent] = useState(<Select />);
  function selectPush() {
    setContent(<Select />);
  }
  function updatePush() {
    setContent(<Update />);
  }
  function insertPush() {
    setContent(<Insert />);
  }
  function deletePush() {
    setContent(<Delete />);
  }

  return (
    <div className="App">
      <header className="App-header">
          <div className='navbar'>
              <button className='navbar_item' onClick={selectPush}>Select</button>
              <button className='navbar_item' onClick={updatePush}>Update</button>
              <button className='navbar_item' onClick={insertPush}>Insert</button>
              <button className='navbar_item' onClick={deletePush}>Delete</button>
          </div>
      </header>
      <>
        <div className='content'>
          {content}
        </div>
        </>
    </div>
  );
}

export default App;
