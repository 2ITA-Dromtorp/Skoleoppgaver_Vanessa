const express = require('express')
 
const app = express()
const PORT = 8481;
const bcrypt = require("bcrypt")
const saltRounds = 10;
const mysql = require('mysql2');
 
app.use(express.static("build"));
app.use(express.json());
 
 
const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'kurs_login',
    host: 'localhost',
    port: 8889,
}
 
const connection = mysql.createConnection(dbConfig);
connection.connect();
app.listen(PORT, () => console.log("Server started" + PORT))
 
app.post('/create-user',(req, res) => {
    const b = req.body
    if ( b.username.length < 1 || b.mail.length < 1 || b.passord.length < 1 || b.number.length < 1) {
        res.status(400).json("Error")
        return;
    }
    const number = parseInt(b.number)
    const query = 'INSERT INTO login ( id, userName, userNumber, userMail, userPassword, userKurs ) VALUES (?, ?, ?, ?, ?, ?)'
    const values = [null, b.username, number, b.mail, b.passord, "[]"]
    console.log(query, values)
    connection.query(query, values, (err, result) => {
        if (err){
            console.log(err)
            res.status(500).send(err)
        } else {
            res.status(200).send(result)  
        }
    })
})

app.post('/login',(req, res) => {
    const b = req.body
    const query = 'SELECT userPassword FROM login WHERE userName = ?'
    const values = [b.username]
    console.log(query, values)
    connection.query(query, values, (err, result) => {
        if (err){
            console.log(err)
            res.status(500).send(err)
        } else {
            console.log(result)
            if (result[0].userPassword === b.passord) {
                res.status(200).send(result)  
            } else {
                res.status(401).send(err)
            }
        }
    })
})

app.post('/bookKurs',(req, res) => {
    const b = req.body
    const query = 'SELECT userKurs FROM login WHERE userName = ? AND userMail = ? AND userNumber = ?'
    const values = [b.username, b.mail, b.number]
    connection.query(query, values, (err, result) => {
        if (err){
            console.log(err)
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                let kurs = result[0].userKurs
                console.log(kurs)
                kurs = JSON.parse(kurs)

                
                if (kurs.includes(b.kurs)) {
                    res.status(409).json("Du er allerede påmeldt dette kurset, naviger tilbake til forside")
                    return (
                        console.log("Kurs book")
                    )
                }
                kurs.push(b.kurs)
                kurs = JSON.stringify(kurs)
                console.log(kurs) + "ggmmjgmh"


                const query = 'UPDATE login SET userKurs = ? WHERE userName = ? AND userMail = ? AND userNumber = ?'
                const values = [kurs, b.username, b.mail, b.number]
                connection.query(query, values, (checkerr, checkresult) => {
                    if (checkerr){
                        console.log(checkerr)
                        res.status(500).send(checkerr)
                    } else {
                        res.status(200).send(checkresult)  
                    }
                })
            } else {
                res.status(401).send(err)
            }
        }
    })
})

