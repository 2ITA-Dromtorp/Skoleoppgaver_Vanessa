import norsk from '../images/norsk.jpg'
import '../App.css';
import '../kurs.css';
import { useNavigate } from "react-router-dom";



export default function (){

    const navigate = useNavigate();

    return (
        <>
      <h2 className='under_nav'>Norsk</h2>
      <div className='parent'>
            <div className='data_content'>
            <img src={norsk} alt="Bilde av ett norsk flagg på en båt med sjø og land i bakgrunn"/>
            <div className='right_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit odio non pulvinar laoreet. 
                    Integer auctor id odio nec placerat. Donec tempor nisi efficitur arcu tempus venenatis. Duis id lobortis erat. 
                    Aenean et venenatis nibh. Curabitur blandit justo ac augue sagittis, id fermentum leo pretium. Fusce eget tortor tempor, 
                    fermentum est eu, egestas diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit odio non pulvinar laoreet. 
                    Integer auctor id odio nec placerat. Donec tempor nisi efficitur arcu tempus venenatis. Duis id lobortis erat. 
                    Aenean et venenatis nibh. Curabitur blandit justo ac augue sagittis, id fermentum leo pretium. Fusce eget tortor tempor, 
                        fermentum est eu, egestas diam</p>
                        <button onClick={() => navigate("/kursbooking/norsk")}>Book kurs</button>
                </div>
            </div>
      </div>
        </>
    )
}
