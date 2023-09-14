import { useState, useEffect } from "react"
import ConfettiExplosion from "react-confetti-explosion"


export default function Nedtelling () {

    const [count, setCount] = useState(10);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {

        let myInterval = setInterval (()=> {
            setCount(count - 1)

            if (count == 0) {
                setCount(10);
                setIsExploding(true);
            } else {
                setIsExploding(false);
            }

        }, 1000)

        return () => clearInterval(myInterval);
        
    })

    let bigBang = {
        force: 0.5 ,
        duration: 3000,
        particleCount: 250,
        height: 1000,
        width: 1600,
        
    }

    return (
        <div>
            <div className="bang">{isExploding && <ConfettiExplosion {...bigBang}/>}</div>
            <h2>Nedtelling</h2>
            <h3> {count}</h3>
        </div>
    )
}