import React from 'react'
import './../App.css'

function Lending() {
  return (
    <div>
    <navbar>Lån Utstyr</navbar>

    <div className='lending'>

        <div className='content'>
            <div className='lending-form'>
                <label>Utstyr</label>
                <input type="text"></input>

                <label>Til elev</label>
                <input type="text"></input>

                <label>Klasse</label>
                <input type="text"></input>

                <button>Send forespørsel</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Lending