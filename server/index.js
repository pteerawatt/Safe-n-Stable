const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 1500;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json());

// create a user
app.post('/users', (req, res) => {
  controller.post_user(req, res);
});

// login
app.post('/users/login', (req, res) => {
  controller.post_login(req, res);
});

// get user
app.get('/users', (req, res) => {
 controller.get_user(req, res);
});

app.listen(port, () => console.log(`Mounting on port: ${port}`));
