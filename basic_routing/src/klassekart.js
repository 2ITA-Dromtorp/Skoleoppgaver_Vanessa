import { useState } from "react";
import Elev from "./elev"
import json from "./profiles";

export default function Klassekart () {

    const [list, setList] = useState(json.elever)
    
    function ShuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        setList([...array])
        console.log(list)
    }


    return (
    <div className='container'>
        <div className='teacher'>

            <Elev name='Lærer'/>

        </div>
        
        <div className='firstRow'>

            <Elev name={list[1].navn}/>
            <Elev name={list[0].navn}/>
            <div className='gang'></div>
            <Elev name={list[2].navn}/>
            <Elev name=''/>
            <Elev name={list[3].navn}/>



            
        </div>

        <div className='middleRow'>

            <Elev name={list[4].navn}/>
            <Elev name={list[5].navn}/>
            <div className='gang'></div>
            <Elev name={list[6].navn}/>
            <Elev name={list[7].navn}/>
            <Elev name={list[8].navn}/>

        </div>

        <div className='lastRow'>

            <Elev name=''/>
            <Elev name=''/>
            <div className='gang'></div>
            <Elev name=''/>
            <Elev name={list[9].navn}/>
            <Elev name={list[10].navn}/>
        </div>

        <div className="shuffleButton">
            <button onClick={() => ShuffleArray(list)}>Shuffle klassekart</button>
        </div>
    
    </div>

        )
}
/*så du prøver å stjele koden min?*/