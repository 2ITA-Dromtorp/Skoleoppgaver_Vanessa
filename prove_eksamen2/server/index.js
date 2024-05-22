const express = require('express')
const port = process.env.PORT || 8080
const app = express()
app.use(express.static("build"));
app.use(express.json());
// app.use(require('cookie-parser')())
const cors = require("cors")
app.use(cors());
var jwt = require('jsonwebtoken');


//env variabler
// const secret = "privatekey"
// const appUrl = 'http://localhost:3000'


// const bcrypt = require("bcrypt")
// const saltRounds = 10;
const mysql = require('mysql2');


const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'kantine_pex',
    host: 'localhost',
    port: 8889,
}

const connection = mysql.createConnection(dbConfig);
connection.connect();
connection.connect((err) => {   if (err) {
    console.error('Error connecting to database:', err.stack);
    return;}
    console.log('Connected to database.'); });

app.listen(port, () => console.log("Server started" + port))

// for å vise meny
app.get('/api/meny', (request, response) => {
    connection.connect( function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    }
    );
    connection.query('SELECT produktId, produktNavn, produktPris, produktBilde, antall FROM meny', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', JSON.stringify(""));
      response.send(JSON.stringify(results))
    });

  })
  app.post('/api/bestill', (request, response) => {
const b = request.body;
    const data = b.data;

    data.sort();
    const arrayOfDifferentNumbers = [];
    for(let i = 0; i<data.length; i++){
        if(i>0&&data[i] === data[i-1]) continue;
        arrayOfDifferentNumbers.push(parseInt(data[i]));
        
    }
    console.log(data)

    console.log(arrayOfDifferentNumbers)

  })