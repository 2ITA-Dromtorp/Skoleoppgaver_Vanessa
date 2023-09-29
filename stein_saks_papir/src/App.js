import { useState, useEffect } from 'react';
import './App.css';
import spillerUkjent from './images/maskin_ukjent.png'
import maskin_papir from './images/maskin_papir.png'
import maskin_saks from './images/maskin_saks.png'
import maskin_stein from './images/maskin_stein.png'
import spiller_stein from './images/spiller_stein.png'
import spiller_saks from './images/spiller_saks.png'
import spiller_papir from './images/spiller_papir.png'



function App() {
  const [playerPoeng, setPlayerPoeng] = useState(0)
  const [machinePoeng, setMachinePoeng] = useState(0)
  const [playerChoice, setPlayerChoice] = useState({id: null, image: spillerUkjent})
  const [machineChoice, setMachineChoice] = useState( {image: spillerUkjent})
  const [winner, setWinner] = useState('Ukjent vinner')

  function Stein() {
    setPlayerChoice({id: 0, image:spiller_stein});
    Spill();
  }
  function Saks() {
    setPlayerChoice({id: 1, image:spiller_saks});
    Spill();
  }
  function Papir() {
    setPlayerChoice({id: 2, image:spiller_papir});
    Spill();
  }
  function Spill() {

    let myArray = [maskin_stein, maskin_saks, maskin_papir];
    let randomNumber = Math.floor(Math.random()*3)
    let machineChoice_temp = myArray[randomNumber];

    setMachineChoice({image: machineChoice_temp, poeng: 0});

    if (playerChoice.id == randomNumber) {
      setWinner('Uavgjort');
    } else if (playerChoice.id == 0 && randomNumber == 1) {
      setWinner('Du vant');
      setPlayerPoeng(playerPoeng + 1);
    } else if (playerChoice.id == 0 && randomNumber == 2) {
      setWinner('Maskin Vinner');
      setMachinePoeng(machinePoeng + 1);
    } else if (playerChoice.id == 1 && randomNumber == 2) {
      setWinner('Du vant'); 
      setPlayerPoeng(playerPoeng + 1);
    } else if (playerChoice.id == 1 && randomNumber == 0) {
      setWinner('Maskin vant');
      setMachinePoeng(machinePoeng + 1);
    } else if (playerChoice.id == 2 && randomNumber == 0) {
      setWinner('Du vant'); 
      setPlayerPoeng(playerPoeng + 1);
    } else if (playerChoice.id == 2 && randomNumber == 1) {
      setWinner('Maskin vant'); 
      setMachinePoeng(machinePoeng + 1);
    }
    
  

  }

  return (
    <div className='container'>

     <div className='top'> 
      <div className='machine'>
          <p>Maskin⬇️</p>
          
          <img src={machineChoice.image} alt='Spiller Ukjent'/>
        </div>

        <div className='result'>
            <p>{playerPoeng}</p>
            <p>{winner}</p>
            <p>{machinePoeng}</p>
            
           
        </div>

        <div className='player1'>

            <img src={playerChoice.image} alt='Spiller Ukjent'/>
            <p>Deg⬆️</p>

        </div>
      </div>

      <div className='bottom'>
          <button className='button'onClick={Stein}>Stein</button>
          <button className='button'onClick={Saks}>Saks</button>
          <button className='button'onClick={Papir}>Papir</button>
      </div>
    </div>


  );
}

export default App;
