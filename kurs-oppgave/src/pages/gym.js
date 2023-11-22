import gym from '../images/gym.jpg'
import '../App.css';
import '../kurs.css';


export default function (){
    return (
        <>
      <h2 className='under_nav'>Kroppsøvning</h2>
      <div className='parent'>
            <div className='data_content'>
            <img src={gym} alt="Bilde av to personer som står klare til å løpe på en løpebane"/>
            <div className='right_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit odio non pulvinar laoreet. 
                    Integer auctor id odio nec placerat. Donec tempor nisi efficitur arcu tempus venenatis. Duis id lobortis erat. 
                    Aenean et venenatis nibh. Curabitur blandit justo ac augue sagittis, id fermentum leo pretium. Fusce eget tortor tempor, 
                    fermentum est eu, egestas diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit odio non pulvinar laoreet. 
                    Integer auctor id odio nec placerat. Donec tempor nisi efficitur arcu tempus venenatis. Duis id lobortis erat. 
                    Aenean et venenatis nibh. Curabitur blandit justo ac augue sagittis, id fermentum leo pretium. Fusce eget tortor tempor, 
                        fermentum est eu, egestas diam</p>
                        <button>Book kurs</button>
                </div>
            </div>
      </div>
        </>
    )
}
