const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://joannjo1729:7RXb7h09Nr5MZFfl@cluster0.i9aunkp.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = db;
