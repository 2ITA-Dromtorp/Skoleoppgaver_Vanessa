import { useNavigate } from "react-router-dom"
import '../App.css'

export default function ({kurs}) {
    const navigate = useNavigate();

    return (
        <>
        <h2 className='under_nav'>Booking av kurs</h2>
        <h4 className='over_content'>Du har nå fullført booking av kurs.</h4>
        { kurs === "data" ? <h4>Datakunnskap</h4> : <h4></h4>}
        { kurs === "norsk" ? <h4>Norsk</h4> : <h4></h4>}
        { kurs === "heim" ? <h4>Heimkunnskap</h4> : <h4></h4>}
        { kurs === "gym" ? <h4>Kroppsøvning</h4> : <h4></h4>}

        <h5 className="over_content">Du kan nå returnere til forsiden eller logge ut</h5>
        <div className="button_box">
            <button className="button_done" onClick={() => navigate("/hjem")}>Gå til forside</button>
            <button className="button_done" onClick={() => navigate("/")}>Logg ut</button>
        </div>

        </>
    )
}