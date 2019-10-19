// importando o express
const express = require('express');

// executando express
const server = express();

// configurar para receber json em posts
server.use(express.json());

const users = ['cookie', 'tchu', 'angel']

// rotas
server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const index = req.params.index;
  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { name } = req.body;
  const index = req.params.index;
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);
  return res.send();
});


// abrindo porta para o servindexor
server.listen(3000);