import './App.css';
import Oppgave1 from './Oppgave1';
import Oppgave2 from './Oppgave2';
import Pil from './Pil';
import Klokke from './Klokke';
import Nedtelling from './Nedtelling';
import Api from './Api';
import Game from './Stein';
import ConfettiExplosion from 'react-confetti-explosion';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Game/>
      </header>
    </div>
  );
}

export default App;
