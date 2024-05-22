import { useState, useEffect } from 'react';
import axios from 'axios';

//prøv å gjøre mulig å velge antall

function Bestill() {
    useEffect(() => {
        async function fetchData() {
            const produktid = JSON.parse(sessionStorage.getItem("produktId"));
            const response = await axios.post('/api/bestill', {
                data: produktid
            });

            if(!response.ok) return;
            const result = await response.json();
            console.log(result)
        }

        fetchData();
    }, [])

  return (
    <div>
        <div className='header'></div>
    </div>
  )
}

export default Bestill