import '../App.css';
import { useNavigate } from "react-router-dom";


export default function () {

    const navigate = useNavigate();

    return (
        <>
        <h2 className='under_nav'>Booking av kurs</h2>
        <h4 className='over_content'>Fyll inn personlig informasjon for å fullføre booking av kurs</h4>
        <div className='praktisk_informasjon'>
            <h6>Praktisk informasjon om kurset</h6>
            <p>Kurset begynner Mandag 8 Januar og varer til og med Fredag 8 Mars.</p>
            <p>Vedlagt finner du ett bilde av timeplanen din</p>
            <a href="https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/">For å lage react tabell</a>
        </div>
        <div className='personlig_info'>
            <p>Oppgi fullt navn</p>
            <input type="text"></input>
            <p>Oppgi telefonnummeret</p>
            <input type="number"></input>
            <p>Oppgi e-post adressen din</p>
            <input type="email"></input>
        </div>
        <div className='under_info'>
            <input onClick={() => navigate("/bekreftelse")} className='button_style' type="submit" value="Book kurs" />        
        </div>

        </>
    )
}