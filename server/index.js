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
app.post('/api/token', (req, res) => {
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
app.get('/api/mounts', (req, res) => {
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
app.get('/api/mountinfo', (req, res) => {
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
app.get('/api/creature', (req, res) => {
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

// takes current username and mount name to add to DB
app.get('/api/users/mounts', (req, res) => {
  const Mount = {
    username: req.query.username,
    name: '',
    description: '',
    picture: '',
  };

  const options_getToken = {
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

  request(options_getToken, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      const token = info.access_token;

      const options1 = {
        url: 'https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      request(options1, (error1, response1, body1) => {
        if (!error1 && response1.statusCode === 200) {
          const info1 = JSON.parse(body1);
          const allMount = (info1.mounts);
          const target = allMount.filter((targetMount) => targetMount.name === req.query.name);
          const mountId = target[0].id;

          const options2 = {
            url: `https://us.api.blizzard.com/data/wow/mount/${mountId}?namespace=static-us&locale=en_US`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          request(options2, (error2, response2, body2) => {
            if (!error2 && response2.statusCode === 200) {
              const info2 = JSON.parse(body2);
              Mount.name = info2.name;
              Mount.description = info2.description;
              const creatureId = info2.creature_displays[0].id;

              const options3 = {
                url: `https://us.api.blizzard.com/data/wow/media/creature-display/${creatureId}?namespace=static-us&locale=en_US`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };

              request(options3, (error3, response3, body3) => {
                if (!error3 && response3.statusCode === 200) {
                  const info3 = JSON.parse(body3);
                  Mount.picture = info3.assets[0].value;
                  controller.add_mount(Mount, res);
                }
              });
            }
          });
        }
      });
    }
  });
});

// delete current display mount from user
app.delete('/api/users/mounts', (req, res) => {
  controller.delete_user_mount(req, res);
});

// create a user
app.post('/api/users', (req, res) => {
  controller.post_user(req, res);
});

// login
app.post('/api/users/login', (req, res) => {
  controller.post_login(req, res);
});

// get user
app.get('/api/users', (req, res) => {
 controller.get_user(req, res);
});

app.listen(port, () => console.log(`Mounting on port: ${port}`));
