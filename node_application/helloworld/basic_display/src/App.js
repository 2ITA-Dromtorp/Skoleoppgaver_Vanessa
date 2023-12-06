import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='navbar'>
              <button className='navbar_item'>SELECT</button>
              <button className='navbar_item'>UPDATE</button>
              <button className='navbar_item'>INSERT</button>
              <button className='navbar_item'>DELETE</button>
          </div>
      </header>
      <body>
        <div className='content'>
          <h1>SELECT</h1>
          <h1>UPDATE</h1>
          <h1>INSERT</h1>
          <h1>DELETE</h1>
        </div>
      </body>
    </div>
  );
}

export default App;
