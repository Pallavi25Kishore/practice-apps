require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/response/accountinfo', (req, res) => {
  var params = [req.body.username, req.body.email, req.body.password, req.session_id];
  var querystring = 'INSERT INTO responses (name, email, password, session_id) VALUES (?, ?, ?, ?)';
  db.queryAsync(querystring, params)
  .then((response) => {
    res.status(201).send('details have been saved');
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

app.patch('/response/addressinfo', (req, res) => {
  var params = [req.body.address, req.session_id];
  var querystring = 'UPDATE responses SET address = ? WHERE session_id= ?';
  db.queryAsync(querystring, params)
  .then((response) => {
    res.status(201).send('details have been saved');
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

app.patch('/response/cardinfo', (req, res) => {
  var params = [req.body.cardnum, req.body.expiry, req.body.cvv, req.body.zipcode, req.session_id];
  var querystring = 'UPDATE responses SET cardnum = ?, expiry = ?, cvv = ? , zipcode = ? WHERE session_id = ?';
  db.queryAsync(querystring, params)
  .then((response) => {
    res.status(201).send('details have been saved');
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

app.get('/response', (req, res) => {
 var querystring = 'SELECT * FROM responses';
 db.queryAsync(querystring)
 .then((response) => {
  res.status(200).send(response);
 })
 .catch((err) => {
  res.status(400).send(err);
 });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
