const db = require('../db/index.js');

// create user
const post_user = (uName, pass, callback) => {
  db.saveUsr(uName, pass, callback);
};

// login
const post_login = (uName, callback) => {
  db.findUsr(uName, callback);
};

// get user data
const get_user = (uName, callback) => {
  db.getUsr(uName, callback);
};

module.exports = {
  post_user,
  post_login,
  get_user,
};
