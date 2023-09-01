import logo from './images/stjerne.jpeg';
import './App.css';
import MyApp from './NewComponent';
import { AboutPage } from './NewComponent';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dette er et komponent som heter App som ligger i App.js</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <MyApp />
        <AboutPage />
        <Profile />
      </header>
    </div>
  );
}

export default App;

