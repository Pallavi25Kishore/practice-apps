require("dotenv").config();
const express = require("express");
const path = require("path");
const Glossary = require('./db.js');

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/glossary', function (req, res) {
  Glossary.getAll()
  .then((data) => {
    res.send(data);
  })
  .catch(() => {
    res.sendStatus(400);
  });
});

app.post('/glossary', function (req, res) {
  var data = req.body;
  Glossary.addItem(data)
  .then(() => {
    res.status(201).send('new item saved');
  })
  .catch(() => {
    res.sendStatus(400);
  });
});

app.put('/glossary/:id', function (req, res) {
  var index = req.params.id
  var newText = req.body.text;
  Glossary.updateItem(index, newText)
  .then(() => {
    res.send('item updated');
  })
  .catch(() => {
    res.sendStatus(400);
  });
});

app.delete('/glossary/:id', function (req, res) {
  var index = req.params.id
  Glossary.removeItem(index)
  .then(() => {
    res.send('item deleted');
  })
  .catch(() => {
    res.sendStatus(400);
  });
});



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

