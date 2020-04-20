const bcrypt = require('bcryptjs');
const model = require('./model.js');

// create a user
const post_user = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.data.password, salt);

  const username = req.body.data.username;
  const password = hashedPassword;
  
  model.post_user(username, password, (err, results) => {
    if(err) {
      res.send('Username already taken')
    } else {
    res.send(`Successfully created an accout with username: ${results.username}`);
    console.log(results)
    }
  });
}

// login
const post_login = (req, res) => {
  const username = req.body.data.username;
  const password = req.body.data.password;
  model.post_login(username, async (user) => {
  if (user === null) {
    return res.send('Cannot find user')
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
