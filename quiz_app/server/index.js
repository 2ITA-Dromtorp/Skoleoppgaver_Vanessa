const express = require('express')
const app = express()

const port = process.env.PORT || 8231
app.use(express.static("build"));

app.listen(port, ()=>{console.log(port)})