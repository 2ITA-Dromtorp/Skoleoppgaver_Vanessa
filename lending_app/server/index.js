const express = require('express')
const port = process.env.PORT || 8080
const app = express()
app.use(express.static("build"));

const bcrypt = require("bcrypt")
const saltRounds = 10;
const mysql = require('mysql2');

app.use(express.json());
 
 
const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'dromtorp',
    host: 'localhost',
    port: 8889,
}

const connection = mysql.createConnection(dbConfig);
connection.connect();
app.listen(port, () => console.log("Server started" + port))
 
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