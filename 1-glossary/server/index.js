require("dotenv").config();
const express = require("express");
const path = require("path");
const Glossary = require('./db.js');

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/glossary', function (req, res) {

});

app.post('/glossary', function (req, res) {
  var data = req.body;
  Glossary.addItem(data)
  .then(() => {
    res.status(201).send('new item saved');
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

app.put('/glossary/:id', function (req, res) {
  var index = req.params.id // NOTE - see how id key is created in mondodb

});

app.delete('/glossary/:id', function (req, res) {
  var index = req.params.id // NOTE - see how id key is created in mondodb

});



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

