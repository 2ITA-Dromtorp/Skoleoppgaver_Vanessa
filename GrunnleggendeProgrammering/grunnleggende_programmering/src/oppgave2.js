import {useState} from 'react';

function DelOppgaveA () {

    //LAge en funksjon som regner ut areal av ett rektangel
    let width = 8
    let length = 8

    return (
        <div className="delOppgave">
        <h2>Deloppgave A</h2>
        <p>Lag et program som regner ut arealet av et rektangel. Lengden er 8 og bredden er 8. Skriv dette som funksjon i javascript</p>
        <p>Svar: let width = 8</p>
        <p>let length = 8</p>
        <p>Svar: {JSON.stringify(width*length)}</p>
        <p>  </p>
        </div>
    );
}



function DelOppgaveB () {

    //Vi skal lage en funksjon som regner ut arealet av en trekant

    let lengde = 8;
    let bredde = 6;

    return (
        <div className="delOppgave">
        <h2>Deloppgave B</h2>
        <p>Lag et program som regner ut arealet av en trekant. Formelen for en trekant er A = L*B / 2. Returner arealet i funksjonen.</p>
        <p>Svar: let lengde = 8; og let bredde = 6;</p>
        <p>Svar: {JSON.stringify((lengde*bredde)/2)} </p>
        </div>
    );
}

function DeloppgaveC () {

    const [Bredde, setBredde] = useState(0)
    const [Lengde, setLengde] = useState(0)

    function updateBredde(event) {
        setBredde (event.target.value);
    }

    function updateLengde(event) {
        setLengde (event.target.value);
    }

    return (
        <div className="delOppgave">
        <h2>Deloppgave C</h2>
        <p>Lag et program som heter areal(lengde, bredde). Denne har to input-parametre; lengde og bredde. Funksjonen skal regne ut både arealet av et rektangel og en trekant. Men du skal ikke skrive utregningen på nytt.
            Returner arealet fra rektangel og en trekant. Bruk valgfrie sider som lengde og bredde.</p>
        <input type ="number" value={Bredde} onChange={updateBredde}></input>
        <input type ="number" value={Lengde} onChange={updateLengde}></input>
        <p>Svar Rektangel: Arealet er {Bredde*Lengde}</p>
        <p>Svar Trekant: Arealet er {(Bredde*Lengde)/2}</p>
        
        </div>
    )
}

function DeloppgaveD () {
    //Jeg skal lage en pil opp, en pil ned, en sirkel i midten av de. Når man trykker på hver av pilene skal verdien endre seg
    const [count, setCount] = useState(0);

    function PilOpp() {
      setCount(count + 1);
    }
    function PilNed() {
      setCount(count - 1);
    }
  
    function MyButton({ count, onClick }) {
        return (
          <>
            
          <button onClick={onClick}>
            Clicked
          </button>
            </>
          
        );
    }

    return (
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={PilOpp} > <img src='../images/up.png'/> </MyButton>
        <p>{count}</p>
        <MyButton count={count} onClick={PilNed} />
      </div>
    );
  }
  


function Oppgave2 () {

    return (
        <>
        <h1>Dette er oppgave 2</h1>
        <DelOppgaveA />
        <DelOppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
        </>
    )

}

export default Oppgave2;