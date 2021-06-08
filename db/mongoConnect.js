const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0.lok6h.mongodb.net/cards_project?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Mongo Has Connected");
});

module.exports = db;
