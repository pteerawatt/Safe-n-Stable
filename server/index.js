const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 1500;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json());


// app.get('/users', (req, res) => {
//   res.json(users);
// });

app.post('/users', (req, res) => {
  controller.post_user(req, res);
});

app.post('/users/login', async (req, res) => {
  controller.post_login(req, res);
});

app.listen(port, () => console.log(`Mounting on port: ${port}`));
