import maskin_papir from './images/maskin_papir.png';
import maskin_saks from './images/maskin_saks.png';
import maskin_stein from './images/maskin_stein.png';
import maskin_ukjent from './images/maskin_ukjent.png';
import spiller_papir from './images/spiller_papir.png';
import spiller_saks from './images/spiller_saks.png';
import spiller_stein from './images/spiller_stein.png';
import { useState, useEffect } from "react";




export default function Stein () {

    return (
        <div className='sspGame'>
            <h2>Stein - Saks - Papir</h2>
            <img src={maskin_ukjent}></img>
            <button>Play</button>
            <img src={maskin_ukjent}></img>
            <div className='sspButton'>
                <button>Stein</button>
                <button>Saks</button>
                <button>Papir</button>
            </div>

        </div>
    )
}
