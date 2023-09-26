import { useState, useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';


export default function Klokke () {

    let time = new Date();
    let timeString = time.toTimeString();

    const [currentTime, setCurrentTime] = useState(new Date);

useEffect (() => {
    const myInterval = setInterval(() => {
        setCurrentTime(new Date);
    }, 1000);

    return () => clearInterval(myInterval);
    })

    function App() {
        const [isExploding, setIsExploding] = useState(false);
        return <>{isExploding && <ConfettiExplosion />}</>;
      }


      <ConfettiExplosion
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
        />;

    return (
        <div>
            <h1>Digital klokke</h1>
            <h2>{currentTime.toTimeString()}</h2>
            <ConfettiExplosion/>
        </div>
    )

}
