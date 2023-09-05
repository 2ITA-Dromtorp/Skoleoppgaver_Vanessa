

function DelOppgaveA () {
    return (
        <div className="delOppgave">
        <h2>Deloppgave A</h2>
        <p>Lag et program som regner ut arealet av et rektangel. Lengden er 8 og bredden er 8. Skriv dette som funksjon i javascript</p>
        <p id="oppg1">Svar: let width = 8</p>
        <p>let length = 8</p>
        <p>Svar: Se i console loggen nå</p>
        <p>  </p>
        </div>
    );
}

let width = 8
let length = 8
const areal = width*length
console.log('Oppgave 2A: ' +areal)

function DelOppgaveB () {
    return (
        <div className="delOppgave">
        <h2>Deloppgave B</h2>
        <p>Lag et program som regner ut arealet av en trekant. Formelen for en trekant er A = L*B / 2. Returner arealet i funksjonen.</p>
        <p id="oppg1">Svar: </p>
        <p>Svar: </p>
        <p>  </p>
        </div>
    );
}



function Oppgave2 () {

    return (
        <>
        <h1>Dette er oppgave 2</h1>
        <DelOppgaveA />
        <DelOppgaveB />

        </>
    )

}

export default Oppgave2;