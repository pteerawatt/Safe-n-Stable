const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
const port = 1500;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json());


const users = [];
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', async (req, res) => {
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
});

app.post('/users/login', async (req, res) => {
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
})

app.listen(port, () => console.log(`Mounting on port: ${port}`));
