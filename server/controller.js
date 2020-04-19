const bcrypt = require('bcryptjs');
const model = require('./model.js');

// create a user
const post_user = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.query.password, salt);

  const username = req.query.username;
  const password = hashedPassword;
  
  model.post_user(username, password, (err, results) => {
    if(err) {
      res.status(500).send('Username already taken')
    } else {
    res.status(201).send(results);
    }
  });
}

// login
const post_login = (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  model.post_login(username, async (user) => {
  if (user === null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send('Your logged in!')
    } else {
      res.send('Incorrect password')
    }
  } catch {
      res.status(500).send()
    }
  });
}

module.exports = { 
  post_user,
  post_login,
}
