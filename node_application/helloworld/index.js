//This app starts a server and listens on port 3000 for connections. 
//The app responds with “Hello World!” for requests to the root URL (/) or route. 
//For every other path, it will respond with a 404 Not Found

const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');
var cors = require('cors')


app.use(express.json())
//Every cors request will be allowed from http://localhost:3000
app.use(cors());

const dbConfig = {
  user: 'root',
  password: 'root',
  database: 'dromtorp1',
  host: 'localhost',
  port: 8889,
}



const connection = mysql.createConnection(dbConfig);
//For å hente alle elevene i databasen
app.get('/', (request, response) => {
  connection.connect( function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  }
  );
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', JSON.stringify(results));
    response.send(JSON.stringify(results))
  });
  
})
//For å legge til en ny elev i databasen
app.post('/create', (request, response) => {
  const sql = "INSERT INTO elev (Fornavn, Etternavn, DatamaskinID, Hobby, Klasse, Kjonn) VALUES (?, ?, ?, ?, ?, ?)";
  console.log(request.body.Fornavn)
  const values = 
  [request.body.Fornavn, 
    request.body.Etternavn, 
    request.body.DatamaskinID, 
    request.body.Hobby, 
    request.body.Klasse, 
    request.body.Kjonn];

    connection.query(sql, values, (error, data) => {
      if (error) {
        console.log(error)
        return response.status(500).json({ error: error.message })
      }
      else{
        return response.json(data)
      }
    })
})

// For å oppdatere data fra en elev i databasen
app.put('/update/:id', (request, response) => {
  const sql = "UPDATE elev SET Fornavn = ?, Etternavn = ?, DatamaskinID = ?, Hobby = ?, Klasse = ?, Kjonn = ? WHERE ElevID = ?";
  console.log(request.body.Fornavn)
  const id = request.params.id;
  const values =   [request.body.Fornavn, 
    request.body.Etternavn, 
    request.body.DatamaskinID, 
    request.body.Hobby, 
    request.body.Klasse, 
    request.body.Kjonn];
  connection.query(sql, [...values, id],(error, data) => {
    if (error) {
      console.log(error)
      return response.status(500).json({ error: error.message })
      }
      else{
        return response.json(data)
      }
    })
})

//Delete en elev i databasen
app.delete('/elev/:id', (request, response) => {
  const sql = "DELETE FROM elev WHERE ElevID = ?";
  console.log(request.body.Fornavn)

    const id = request.params.id;
    connection.query(sql, [id],(error, data) => {
      if (error) {
        console.log(error)
        return response.status(500).json({ error: error.message })
      }
      else{
        return response.json(data)
      }
    })
})

app.listen(port, () => {
  console.log(`Best app listening on port ${port}`)
})



/*
fire forskjellige http requests
get ( server - klient) - hente/read informasjon
post (client - server) - legge til/insert data
put (client- server) - endre/update eksisterene data
delete (server - klient) - slette/delete data
*/

app.get('/klasse', (request, response) => {
  connection.connect( function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  }
  );
  connection.query('SELECT * FROM programfag', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', JSON.stringify(results));
    response.send(JSON.stringify(results))
  });
  
})