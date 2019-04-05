const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { authenticate } = require('../auth/authenticate');
const { addNewUser, getUserByName } = require('../database/dbQueries');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  try {
    let { username, password } = req.body;

    if (username && password) {
      const hashedPassword = bcrypt.hashSync(password, 12);
      password = hashedPassword;
      const registeredUser = await addNewUser(username, password);
      res.status(201).json(registeredUser);
    } else {
      res.status(400).json({ message: 'Missing username and/or password.' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
