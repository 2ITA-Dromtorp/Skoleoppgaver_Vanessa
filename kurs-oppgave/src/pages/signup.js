import '../App.css';

export default function () {
    return(
        <>        
            <h2 className='under_nav'>Lag en brukerkonto</h2>
            <div className='signup_input'>
                <p>Opprett ett brukernavn</p>
                <input type="text"></input>
                <p>Oppgi mobilnummeret ditt</p>
                <input type="number"></input>
                <p>Oppgi e-post adressen din</p>
                <input type="email"></input>
                <p>Opprett ett passord</p>
                <input type="text"></input>
                <input type="submit" value={"Lag bruker"}></input>
             </div>
        </>

    )

}