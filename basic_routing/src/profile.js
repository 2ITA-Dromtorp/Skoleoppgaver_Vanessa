import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import profileIMG from './images/profile-image.jpg';
import json from './profiles';


export default function Profile() {

    const {profile} = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({});
    
    useEffect(() => {
        json.elever.map((elev) => {
            if (profile == elev.navn) {
             setStudent(elev)
            }
        })
    }, [])

    


    return (
        <div className="profile">
            <div className="profilecard">
                <h1> {profile} </h1>
                <img src={profileIMG} alt="Profilbilde"></img>
                <p>Klasse: {student.klasse}</p>
                <p>E-mail: {student.email}</p>
                <p>Telefon: {student.telefon}</p>
            </div>
            <button onClick={() => navigate("/")}>Til hovedmeny</button>
        </div>
    );
}