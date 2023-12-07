//This app starts a server and listens on port 3000 for connections. 
//The app responds with “Hello World!” for requests to the root URL (/) or route. 
//For every other path, it will respond with a 404 Not Found

const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');
var cors = require('cors')


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