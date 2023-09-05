
function DelOppgaveA () {


    return (
        <div className="delOppgave">
        <h2>Deloppgave A</h2>
        <p >Hva skriver du i javascript dersom du vil gi variabelen test verdien 8? Hvilken datatype er dette?</p>
        <p id="oppg1">Svar: let test = 8</p>
        <p>Svar: Se i console loggen nå {console.log(typeof(8))}</p>
        <p>  </p>
        </div>
    );
}

function DeloppgaveB () {

    return (
        <div className="delOppgave">
            <h2>Deloppgave B</h2>
            <p>Hva skriver du dersom du vil gi variabelen test verdien "testverdi"? Hvilken datatype er dette?</p>
            <p>Svar: let test = testverdi</p>
            <p>Svar: Datatypen er da en string også kjent som tekst-string</p>
        </div>
    )
}

function DeloppgaveC () {

    return (
        <div className="delOppgave">
            <h2>Deloppgave C</h2>
            <p>Hva skriver du dersom du vil regne ut 2 * 3 og sette resultatet inn i variabelen produkt?</p>
            <p>Svar: let produkt = 2*3 </p>
            <p>Svar: Se console loggen  </p>
        </div>
    )
}

let produkt = 2*3
console.log('Oppgave 1C: 2*3 er '+ produkt)


function DeloppgaveD () {

    return (
        <div className="delOppgave">
            <h2>Deloppgave D</h2>
            <p>Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette resultatet inn i variabelen broek? </p>
            <p>Svar: let broek = 2/3 </p>
            <p>Svar: Se console loggen  </p>
        </div>
    )
}

let broek = 2/3
console.log('Oppgave 1D: Verdien av 2/3 er ' + broek);



function Oppgave1 () {

    return (
        <>
        <h1>Dette er oppgave 1</h1>
        <DelOppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
        </>
    )

}

export default Oppgave1;