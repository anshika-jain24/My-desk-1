const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

//App Config
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());

//Db config
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

//Routes
require('./routes/user')(app, db);
require('./routes/todo')(app, db);
require('./routes/calender')(app, db);

db.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!");
});

//Listener
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});