import { useState, useEffect } from "react";


export default function Klokke () {

    let time = new Date();
    let timeString = time.toTimeString();

    const [currentTime, setCurrentTime] = useState(new Date);

useEffect (() => {
    const myInterval = setInterval(() => {
        setCurrentTime(new Date);
        console.log('utvikling')
    }, 1000);

    return () => clearInterval(myInterval);
    })


    return (
        <div>
            <h1>Digital klokke</h1>
            <h2>{currentTime.toTimeString()}</h2>
        </div>
    )

}