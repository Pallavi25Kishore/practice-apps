require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

const glossarySchema = mongoose.Schema({
id: mongoose.ObjectId,
text: String
});

const Glossaryitem = mongoose.model('Glossary', glossarySchema);

exports.getAll = function () { // model for get request contoller
  return Glossaryitem.find({}).exec();

};

exports.addItem = function (data) { // model for post request contoller
  return new Glossaryitem(data).save();
};

exports.updateItem = function (index, newText) { // model for put request contoller
  return Glossaryitem.findByIdAndUpdate(index,{ $set: { text: newText}});
};

exports.removeItem = function (index) { // model for delete request contoller
  return Glossaryitem.findByIdAndDelete(index);
};


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
