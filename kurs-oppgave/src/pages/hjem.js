import { useState } from 'react';
import '../App.css';
import data from '../images/data.jpg'
import norsk from '../images/norsk.jpg'
import heim from '../images/heim.jpg'
import gym from '../images/gym.jpg'
import { useNavigate } from "react-router-dom";


export default function() {

    const navigate = useNavigate();

    return(
        <>
        <h2 className='under_nav'>Velkommen til voksenopplæring på Drømtorp Vidregående Skole</h2>
        <h4 className='over_content'>Trykk på det kurset du ønsker å ta og book en time</h4>

        <div className='content'>
            
            <div className='kurs'>
                    <div className='bilde'>
                            <p>Datakunnskap</p>
                            <img onClick={() => navigate("/datakunnskap")} src={data} className="body_img" alt="Bilde av en person som skriver på den beste PC i verden"/>
                    </div>
                    <div className='button_div'>
                        <button onClick={() => navigate("/datakunnskap")}>Datakunnskap kurs</button>
                    </div>
                </div>

            <div className='kurs'>
                    <div className='bilde'>
                        <p>Norsk</p>
                        <img onClick={() => navigate("/norsk")} src={norsk} className="body_img" alt="Bilde av ett norsk flagg på en båt med sjø og land i bakgrunn"/>
                    </div>
                    <div className='button_div'>
                    <button onClick={() => navigate("/norsk")}>Norsk <br/> kurs</button>
                    </div>
                </div>

            <div className='kurs'>
                    <div className='bilde'>
                        <p>Heimkunnskap</p>
                        <img onClick={() => navigate("/heimkunnskap")} src={heim} className="body_img" alt="Bilde av en tallerken med masse forskjellige og fargerrike grønnsaker"/>
                    </div>
                    <div className='button_div'>
                    <button onClick={() => navigate("/heimkunnskap")}>Heimkunnskap kurs</button>
                    </div>
                </div>

            <div className='kurs'>
                    <div className='bilde'>
                        <p>Kroppsøvning</p>
                        <img onClick={() => navigate("/kroppsøvning")} src={gym} className="body_img" alt="Bilde av to personer som står klare til å løpe på en løpebane"/>
                    </div>
                    <div className='button_div'>
                    <button onClick={() => navigate("/kroppsøvning")}>Kroppsøvning kurs</button>
                    </div>
                </div>
        </div>

        <h5 className='under_content'>NB: ikke mulig å ta booke samme kurs flere ganger</h5>
        </>
        )};
        
