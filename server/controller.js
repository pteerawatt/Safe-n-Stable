const bcrypt = require('bcryptjs');
const model = require('./model.js');

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

const post_login = async (req, res) => {
  const user = users.find(user => user.username === req.query.username)
  if (user === null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(req.query.password, user.password)) {
      res.send('Your logged in!')
    } else {
      res.send('Incorrect password')
    }
  } catch {
      res.status(500).send()
    }
}

module.exports = { 
  post_user,
  post_login,
}
