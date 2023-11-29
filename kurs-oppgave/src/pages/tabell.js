export default function ({kurs}) {

    return (
        <>
        <div className="timeplan_tabell">
            <table>
                <tbody>
                <tr>
                    <th>Tidspunkt</th>
                    <th>Mandag</th>
                    <th>Tirsdag</th>
                    <th>Onsdag</th>
                    <th>Torsdag</th>
                    <th>Fredag</th>
                </tr>
                <tr>
                    <td className="tidspunkt">08.00<br/>-09.00</td>
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}
                    

                </tr>
                <tr>
                    <td className="tidspunkt">09.00<br/>-10.00</td>
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}


                </tr>
                <tr>
                    <td className="tidspunkt">10.00<br/>-11.00</td>
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}



                </tr>
                <tr>
                    <td className="tidspunkt">11.00<br/>-12.00</td>
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}
                    { kurs === "gym" ? <td>Kroppsøvning</td> : <td></td>}


                </tr>
                <tr>
                    <td className="tidspunkt">12.00<br/>-13.00</td>
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}


                </tr>
                <tr>
                    <td className="tidspunkt">13.00<br/>-14.00</td>
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}

                </tr>
                <tr>
                    <td className="tidspunkt">14.00<br/>-15.00</td>
                    { kurs === "norsk" ? <td>Norsk</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}
                    { kurs=== "data" ? <td>Datakunnskap</td> : <td></td>}
                    { kurs === "heim" ? <td>Heimkunnskap</td> : <td></td>}


                </tr>
                </tbody>
                
            </table>
        </div>
</>
);
    
}