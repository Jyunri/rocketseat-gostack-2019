// importando o express
const express = require('express');

// executando express
const server = express();

// configurar para receber json em posts
server.use(express.json());

// middleware global
server.use((req, res, next) => {
  console.log(`metodo ${req.method}; url ${req.url}`);
  return next();
})

function checkUserInArray (req, res, next) {
  const user = users[req.params.index]

  if (!user) {
    return res.status(400).json({ error: 'User does not exist' })
  }

  req.user = user;

  return next();
}

function checkUsernameExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required' })
  }

  return next();
}

const users = ['cookie', 'tchu', 'angel']

// rotas
server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkUsernameExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', checkUsernameExists, checkUserInArray,  (req, res) => {
  const { name } = req.body;
  const index = req.params.index;
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);
  return res.send();
});

// abrindo porta para o servindexor
server.listen(3000);