const bcrypt = require('bcryptjs');

const users = [];

const post_user = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.query.password, salt);

    const user = { 
      username: req.query.username,
      password: hashedPassword,
    };
    users.push(user);
    res.status(201).send(users);
  } catch {
    res.status(500).send();
  }
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
