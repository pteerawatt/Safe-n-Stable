const db = require('../db/index.js');

// create user
const post_user = (uName, pass, callback) => {
  // console.log(uName, pass);
  db.saveUsr(uName, pass, callback);
};

// login
const post_login = (uName, callback) => {
  db.findUsr(uName, callback);
};

module.exports = {
  post_user,
  post_login,
};
