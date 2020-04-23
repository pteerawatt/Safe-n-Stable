const db = require('../db/index.js');

// add mount to a stable
const add_mount = (username, name, description, picture, callback) => {
  db.addMount(username, name, description, picture, callback);
};

// delete mount from user
const delete_user_mount = (id, name, callback) => {
 db.deleteMount(id, name, callback);
};

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
  add_mount,
  delete_user_mount,
};
