require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

const glossarySchema = mongoose.Schema({
id: mongoose.ObjectId,
text: STRING
});

const Glossary = mongoose.model('Glossary', glossarySchema);

exports.getAll = function () { // model for get request contoller


};

exports.addItem = function (data) { // model for post request contoller
  return new Glossary(data).save();
};

exports.updateItem = function () { // model for put request contoller

};

exports.removeItem = function () { // model for delete request contoller

};


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
