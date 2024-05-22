import './App.css';
import logo from './images/logo.png'
import Input from './input';
import Test from './test';

function App() {
  return (
    <div className="App">

      <div><img className="logo" src={logo}></img></div>

      <h1 className="info">Vi Trenger Hjelp er opptatte av god kommunikasjon med kundene våres. Etter at du har gitt oss en tilbakemeldig, vil vi kontakte deg så snart som mulig. </h1>
      <h2 className="info">Når du har fått hjelp og saken din er løst, skal du krysse av saken din som "Løst"</h2>

      <Test />

      <div className="footer">
        <h3>Kontakt oss!</h3>
        <h6>Vi prøver å kontakte deg så fort som mulig, men hvis du skal ha extra behov for å kontakte oss kan du kontakte oss via:</h6>
        <div className="contact">
          <p>Adresse: Lorum Ipsums vei 42</p>
          <p>E-post: lorem@ipsum.com</p>
          <p>Telefon nummer: +47 123 45 678</p>
        </div>
      </div>

    </div>
  );
}

export default App;
