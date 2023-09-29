import Elev from "./elev"


export default function Klassekart () {

    return (
    <div className='container'>
        <div className='teacher'>

            <Elev name='Lærer'/>

        </div>
        
        <div className='firstRow'>

            <Elev name='Martin'/>
            <Elev name='Mathias'/>
            <div className='gang'></div>
            <Elev name='Kevin'/>
            <Elev name=''/>
            <Elev name='Andreas'/>


            
        </div>

        <div className='middleRow'>

            <Elev name='Falk'/>
            <Elev name='Sander'/>
            <div className='gang'></div>
            <Elev name='Ylva'/>
            <Elev name='Vanessa'/>
            <Elev name='Chen'/>

        </div>

        <div className='lastRow'>

            <Elev name=''/>
            <Elev name=''/>
            <div className='gang'></div>
            <Elev name=''/>
            <Elev name='Luz'/>
            <Elev name='Frithjof'/>

        </div>

    </div>

        )
}