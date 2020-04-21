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
      {
        name: 'Brown Horse',
        description: 'A favorite among Stormwind\'s guards thanks to its patience and stamina.',
        picture: 'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-2404.jpg',
      },
      {
        name: 'Gray Wolf',
        description: 'This breed of wolf prefers hunting in the fog, relying on its smoky hide to camouflage it from unsuspecting prey.',
        picture: 'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-2320.jpg',
      },
      {
        name: 'White Stallion',
        description: 'The powerful and unyielding white stallion features heavily in the myths of ancient human tribes.',
        picture: 'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-2410.jpg',
      },
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

module.exports = {
  saveUsr,
  findUsr,
  getUsr,
};
