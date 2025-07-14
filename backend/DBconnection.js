const mongoose = require('mongoose');

mongoose.connect("http://127.0.0.1:8004")
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = db;
