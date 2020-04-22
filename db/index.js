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
  stable: [{
    name: String,
    description: String,
    picture: String,
  }],
});

userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

// create a user
const saveUsr = (uName, pass, callback) => {
  const newUsr = new User({
    username: uName,
    password: pass,
    stable: [
      // // Every user comes with a free brown horse
      // {
      //   name: 'Brown Horse',
      //   description: 'A favorite among Stormwind\'s guards thanks to its patience and stamina.',
      //   picture: 'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-2404.jpg',
      // },
    ],
  });
  newUsr.save((err, results) => {
    callback(err, results);
  });
};

// login
const findUsr = (uName, callback) => {
  User.findOne({ username: uName }).exec((err, result) => callback(err, result));
};

// get user info
const getUsr = (uName, callback) => {
  User.findOne({ username: uName }).exec((err, result) => {
    callback(err, result);
  });
};

// add mount to a stable
const addMount = (uName, mName, mDescription, mPic, callback) => {
  const newMount = { name: mName, description: mDescription, picture: mPic };
  User.findOneAndUpdate(
    { username: uName },
    { $push: { stable: newMount } },
    ).exec((err, result) => {
      if (err) {
        console.log(err);
      } else {
        User.findOne({ username: result.username }).exec((e, r) => {
          if (e) {
            console.log(err);
          } else {
            callback(r);
          }
        });
      }
    });
};

module.exports = {
  saveUsr,
  findUsr,
  getUsr,
  addMount,
};
