const db = require('./dbConfig');

module.exports = {
  addNewUser,
  getUserByName,
};

function addNewUser(username, password) {
  return db('users').insert({ username, password });
}

function getUserByName(username) {
  return db('users').where({ username });
}
