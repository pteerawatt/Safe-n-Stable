const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/safe-n-stable', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);


const saveUsr = (uName, pass, callback) => {
  const newUsr = new User({
    username: uName,
    password: pass,
  });
  newUsr.save((err, results) => {
    callback(err, results);
  });
};

module.exports = { saveUsr };
