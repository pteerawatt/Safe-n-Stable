const bcrypt = require('bcryptjs');
const model = require('./model.js');

// create a user
const post_user = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.data.password, salt);

  const { username } = req.body.data;
  const password = hashedPassword;

  model.post_user(username, password, (err, results) => {
    if (err) {
      res.send('Username already taken');
    } else {
    res.send(`Successfully created an accout with username: ${results.username}`);
    }
  });
};

// login
const post_login = (req, res) => {
  const { username, password } = req.body.data;

  model.post_login(username, async (err, user) => {
  if (err) {
    console.log(err);
  }
  if (user === null) {
    return res.send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send('Your logged in!');
    } else {
      res.send('Incorrect password');
    }
  } catch (error) {
      res.send(error);
    }
  });
};

// get user data
const get_user = (req, res) => {
  const { username } = req.query;
  model.get_user(username, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

module.exports = {
  post_user,
  post_login,
  get_user,
};
