import '../App.css';

export default function () {
    return (
        <>
        <h2 className='under_nav'>Booking av kurs</h2>
        <h4 className='over_content'>Fyll inn personlig informasjon for å fullføre booking av kurs</h4>

        <div className='personlig_info'>
            <p>Oppgi fullt navn</p>
            <input type="text"></input>
            <p>Oppgi telefonnummeret</p>
            <input type="number"></input>

        </div>

        </>
    )
}