const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://joannjo1729:kUCv1pdLIwIq0pNC@cluster0.vr4iekl.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0")
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = db;
