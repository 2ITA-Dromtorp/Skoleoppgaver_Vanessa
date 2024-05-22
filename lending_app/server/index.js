const express = require('express')
const port = process.env.PORT || 8080
const app = express()
app.use(express.static("build"));
app.use(express.json());
app.use(require('cookie-parser')())
const cors = require("cors")
app.use(cors());
var jwt = require('jsonwebtoken');


//env variabler
const secret = "privatekey"
const appUrl = 'http://localhost:3000'


const bcrypt = require("bcrypt")
const saltRounds = 10;
const mysql = require('mysql2');


const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'dromtorp',
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

// Opprette token
function createToken(user) {
    console.log(user)
var token = jwt.sign( user, secret, { expiresIn: 60 * 60 });
return token
}


//sjekk auth
app.get('/api/auth', (request, response) => {

const cookies = request.cookies

if(!cookies.token) return response.redirect(appUrl);

  jwt.verify(cookies.token, secret, function(err, decoded) {
    return response.status(200);
  });


})


// For å vise utstyr på home.js
app.get('/api/home', (request, response) => {
    connection.connect( function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    }
    );
    connection.query('SELECT UtstyrID, UtstyrNavn FROM UtstyrTabell', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', JSON.stringify(""));
      response.send(JSON.stringify(results))
    });

  })

  // Legge til utstyr fra admin siden på create.js
  app.post('/api/create',(req, res) => {

    const b = req.body


   try {

    if (b.fornavn.length < 1 || b.etternavn.length < 1 || b.telefon.length < 1 || b.klasseID.length < 1 || b.brukernavn.length < 1 || b.passord.length < 1 || b.elevMail.length < 1 ) {
        res.status(400).json("Error")
        return;
    }
   } catch (error) {

   return res.status(401).send(error.message);
   }
  const query = 'INSERT INTO UtstyrTabell ( UtstyrID, UtstyrNavn) VALUES (?, ?)'
  const values = [b.utstyrNavn, "[]"]

  connection.query(query, values, (err, result) => {
      if (err){
          console.log(err) }
          connection.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }

            return res.status(200).send(result);
        });

    })
 }
 )


  // For å vise utstyr som er utlånt på utlan.js
  app.get('/api/borrowed', (request, response) => {
    connection.connect( function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    }
    );
    connection.query('SELECT UtstyrID, ElevID FROM UtlanTabell', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', JSON.stringify(results));
      response.send(JSON.stringify(results))
    });

  })
// elev og lærer login på login.js
app.post("/api/login", (req, res) => {
    const b = req.body;

    let query = "";

    switch (b.type) {
      case "elev": {
    ;

  return  connection.query('SELECT hash FROM ElevTabell WHERE brukernavn = ?', [b.brukernavn], (err, elev) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          if (!elev) return res.status(401)
           bcrypt.compare(b.passord, elev[0].hash).then(result => {

            const token = createToken(elev[0])
            console.log(token)
               if(result) return res.status(200).send({token, user: {brukernavn: b.brukernavn}});
               res.status(404).send('Feil passord');
           })

        }
      });
      }
      case "larer": {
    return connection.query('SELECT larerPassord FROM LarerTabell WHERE larerBrukernavn = ? AND  larerPassord = ?', [b.brukernavn, b.passord], (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          if (!result) return res.status(401).send(err);
          return res.status(200).send(result);
        }
      });
      }
    }

  });

// For å se elever i elever.js
app.get('/api/student', (request, response) => {
    connection.connect( function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    }
    );
    connection.query('SELECT elevID, brukernavn, fornavn, etternavn, telefon, elevMail, klasseID FROM ElevTabell', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', JSON.stringify(results));
      response.send(JSON.stringify(results))
    });

  })


// app.get('/api/equipment', (request, response) => {
//     const [results] = await connection.query(
//         'SELECT utstyrID FROM UtstyrTabell WHERE `UtstyrID` = 1',
//       );
//       response.send(JSON.stringify(results))


// })

app.get("/api/equipment/:utstyrId", async (req, res) => {

    let query = "SELECT utstyrNavn FROM UtstyrTabell WHERE UtstyrID = ?";


    connection.query(query, [req.params.utstyrId], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {


        return res.json(result?.[0])
      }
    });
  });


// For å oppdatere utstyr data i databasen
// app.put('/lending/:id', (request, response) => {
//     const sql = "UPDATE UtlanTabell SET ElevID = ?, Godkjennelse = ?, WHERE UtstyrID = ?";
//     const id = request.params.id;
//     const { ElevID, Dato } = request.body;
//     const values = [ElevID, Dato, id];
//     connection.query(sql, values, (error, data) => {
//       if (error) {
//         console.log(error)
//         return response.status(500).json({ error: error.message })
//         }
//         else{
//           return response.json(data)
//         }
//       })
//   })


  // For å oppdatere utlån tabell
  // app.get("/lending/:id", async (req, res) => {
  //   const bookedEquipment = req.body.UtstyrId;
  //   const id = req.body.ElevID;
  //   const query = 'SELECT * from UtlanTabell where ElevID = ? and UtstyrID = ?';
  //   const values = [bookedEquipment, id, ];
  //   const [result] = await req.dbConfig.query(query, values);
  //   console.log('Result:', result);
  //   res.send("Forespørsel sendt");
  // })
  app.put('/lending/:id', (request, response) => {
    const sql = "UPDATE UtlanTabell SET ElevID = ?, Dato = ?, WHERE UtstyrID = ?";
    const id = request.params.id;
    const { ElevID, Dato } = request.body;
    const values = [ElevID, Dato, id];
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
  // For å se forespørsler i requests.js
  app.get('/api/pending-requests', (req, res) => {
    connection.query('SELECT * FROM UtlanTabell', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.json(results);
        }
    });
});
app.put('/api/accept-request/:id', (req, res) => {
    const id = req.params.id;
    connection.query('UPDATE UtlanTabell SET Godkjennelse = true WHERE UtstyrID = ?', ['Godkjent', id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.json(results);
        }
    });
})
  app.post('/api/addStudent',(req, res) => {

    const b = req.body

   try {

    if (b.fornavn.length < 1 || b.etternavn.length < 1 || b.telefon.length < 1 || b.klasseID.length < 1 || b.brukernavn.length < 1 || b.passord.length < 1 || b.elevMail.length < 1 ) {
        res.status(400).json("Error")
        return;
    }

    //Sjekk om bruker eksisterer
    connection.query('SELECT brukernavn FROM ElevTabell WHERE brukernavn = ?', [b.brukernavn], (err, result) => {
        if (err){
            console.log(err)
           return res.status(500).send(err)
        }
        if(result?.length){
           return res.status(401).json({ message: "Brukernavn eksisterer allerede." });
        }
    })

      // Hash password
      bcrypt.hash(b.passord, 10, (err, hash) => {

         if (err) throw new Error("Internal Server Error");

        // Opprett en ny bruker for elev
    const telefon = parseInt(b.telefon)
    const query = 'INSERT INTO ElevTabell ( elevID, fornavn, etternavn, telefon, klasseID, brukernavn, hash, elevMail ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const values = [null, b.fornavn, b.etternavn, telefon, b.klasseID, b.brukernavn, hash, b.elevMail, "[]"]

    connection.query(query, values, (err, result) => {
        if (err){
            console.log(err)
            res.status(500).send(err)
        }

        return res.status(200).send(result)

    })

    return res.status(200)

      });


   } catch (error) {

    return res.status(401).send(error.message);

   }

})
//Slette en elev i databasen
// app.get('/api/elev/:id', (request, response) => {
//     const sql = "DELETE FROM ElevTabell WHERE ElevID = ?";
//     console.log(request.params.id)

//       const id = request.params.id;
//       connection.query(sql, [id],(error, data) => {
//         if (error) {
//           console.log(error)
//           return response.status(500).json({ error: error.message })
//         }
//         else{
//           return response.json(data)
//         }
//       })
//   })
/*
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
})*/

