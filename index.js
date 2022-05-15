const express = require('express')
const connection = require("./db.js");
const bodyParser = require("body-parser");
const rezervationsRouter = require('./routers/rezervationsRouter');
const courtsRouter = require('./routers/courtsRouter');
const mysql = require("mysql");

const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use('/rezervations', rezervationsRouter); 
app.use('/courts', courtsRouter); 

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});



