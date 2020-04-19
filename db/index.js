const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/safe-n-stable', { useNewUrlParser: true });

let userSchema = new mongoose.Schema({
  _id: String,
  password: String,
});

let User = mongoose.model('User', userSchema);

module.exports { User }