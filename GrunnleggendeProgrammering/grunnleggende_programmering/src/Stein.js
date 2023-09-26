import { useState, useEffect } from "react";
import maskin_papir from './images/maskin_papir.png';
import maskin_saks from './images/maskin_saks.png';
import maskin_stein from './images/maskin_stein.png';
import maskin_ukjent from './images/maskin_ukjent.png';
import spiller_papir from './images/spiller_papir.png';
import spiller_saks from './images/spiller_saks.png';
import spiller_stein from './images/spiller_stein.png';





export default function Game () {
    
    const [playerChoice, setPlayerChoice] = useState(maskin_ukjent)
    const [machineChoice, setMachineChoice] = useState(maskin_ukjent)


    function changePlayerStein() {
        setPlayerChoice(spiller_stein)
    }
    function changePlayerSaks(){
        setPlayerChoice(spiller_saks)
    }
    function changePlayerPapir() {
        setPlayerChoice(spiller_papir)
    }
    function changeMachineStein(){
        setMachineChoice(maskin_stein)
    }
    function changeMachineSaks(){
        setMachineChoice(maskin_saks)
    }
    function changeMachinePapir(){
        setMachineChoice(maskin_papir)
    }

    function changeMachineStatus() {}
    
    function machineStatus() {

    }

    return (
        <div className='sspGame'>
            <h2>Stein - Saks - Papir</h2>
            <img src={machineChoice}></img>
            <button onClick={machineStatus}>Play</button>
            <img src={playerChoice}></img>
            <div className='sspButton'>
                <button onClick={changePlayerStein}>Stein</button>
                <button onClick= {changePlayerSaks}>Saks</button>
                <button onClick={changePlayerPapir}>Papir</button>
            </div>
        </div>
        
    )
}
