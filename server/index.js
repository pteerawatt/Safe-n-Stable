const express = require('express');
const path = require('path');
const request = require('request');
const controller = require('./controller.js');
const { BNET_ID, BNET_SECRET } = require('../key.js');

const app = express();
const port = 1500;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json());

// get token
app.post('/token', (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://us.battle.net/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      grant_type: 'client_credentials',
      client_id: BNET_ID,
      client_secret: BNET_SECRET,
      audience: 'YOUR_API_IDENTIFIER',
    },
  };

  const callback = (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      res.send(info.access_token);
    }
  };

  request(options, callback);
});

// get an array of all mounts
app.get('/mounts', (req, res) => {
  const { token } = req.query;
  const options = {
    url: 'https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      res.send(info);
    }
  }

  request(options, callback);
});

// get info on a specific mount
app.get('/mountinfo', (req, res) => {
  const { token, id } = req.query;
  const options = {
    url: `https://us.api.blizzard.com/data/wow/mount/${id}?namespace=static-us&locale=en_US`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      res.send(info);
    }
  }

  request(options, callback);
});

// get picture of a creature
app.get('/creature', (req, res) => {
  const { token, id } = req.query;
  const options = {
    url: `https://us.api.blizzard.com/data/wow/media/creature-display/${id}?namespace=static-us&locale=en_US`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      res.send(info);
    }
  }

  request(options, callback);
});

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
