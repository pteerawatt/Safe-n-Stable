const db = require('../db/index.js');

const post_user = (uName, pass, callback) => {
  // console.log(uName, pass);
  db.saveUsr(uName, pass, callback);
};

module.exports = {
  post_user,
};
