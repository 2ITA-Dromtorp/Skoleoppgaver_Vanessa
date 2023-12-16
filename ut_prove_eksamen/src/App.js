import "./App.css";
import { useRef, useState } from "react"; //Bruker inputRef for å huske informasjon, istedenfor å trigge en ny render
import Logo from "./images/logo.png";

const App = () => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const [items, setItems] = useState([]);

  function handleCheck(e, index) {     //oppdaterer items-arrayet basert på index.
    // ved å mappe over alle elementer og returnere et nytt array hvor de er endret basert på index
    setItems(
      items.map((i, itemIndex) => {
        return {
          ...i,
          checked: index === itemIndex ? e.target.checked : i.checked,   //Endringen setter "checked" til e.target.checked. 
        };
      })
    );
  }
  const handleSubmit = (event) => { //Trigges når form er submitta
    event.preventDefault(); // Gjør at siden ikke refresher.

    setItems([ //Legger til i items-arrayet d
      ...items,
      {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        message: message.current.value,
        checked: false,
      },
    ]);

    // Fjerner inputverdier i formsen
    event.target.reset();
  };

  const handleDelete = (index) => { 
    setItems(items.filter((_, itemIndex) => index !== itemIndex));
  } 

  

  return (
    <div className="App">
      <img className="logo" src={Logo} alt="Logo" />
      
      <div className="info">
        <h1>Vi Trenger Hjelp er opptatte av god kommunikasjon med kundene våres. <br/> Etter at du har gitt oss en tilbakemeldig, vil vi kontakte deg så snart som mulig. </h1>
        <h2>Når du har fått hjelp og saken din er løst, skal du krysse av saken din som "Løst"</h2>
        </div>
      <div className="form">
        <div className="form__container">
          <h3>Gi oss en tilbakemelding</h3>

          <form className="form__content" onSubmit={handleSubmit}>
            <input
              ref={name}
              id="first_name"
              name="first_name"
              type="text"
              placeholder="Navn"
              required
            />

            <input
              ref={email}
              id="email"
              name="email"
              type="email"
              placeholder="Epost"
              required
            />

            <input
              ref={phone}
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telefon"
              required
            />

            <div className="form__textarea">
              <textarea
                placeholder="Melding"
                ref={message}
                name="message"
                rows={4}
                cols={40}
              />
            </div>

            <button type="submit">Send inn</button>
          </form>
        </div>

        <div className="form__feedback">
          <h3>Innmeldte meldinger</h3>

          <div className="form__feedback-items">
            {items.map((item, index) => (
              <div
                className={`form__feedback-item form__feedback-item--${
                  item.checked ? "checked" : ""
                }`}
                key={index}
              >
                <span>Navn: {item.name}</span>
                <span>Email: {item.email}</span>
                <p className="form__feedback-message">Melding: {item.message}</p>

                <span>
                  {item.checked ? "Fullført" : "Fullfør"}
                  <input
                    type="checkbox"
                    value={item.checked}
                    onChange={(e) => handleCheck(e, index)}
                  ></input>
                </span>
                <form className="form__feedback-clear">
                  <button onClick={() => handleDelete(index)} type="button">Fjern valgte</button>
                </form>
              </div>
            ))}
          </div>
  
        </div>
      </div>
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
};

export default App;
