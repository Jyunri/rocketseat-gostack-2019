// importando o express
const express = require('express');

// executando express
const server = express();

const users = ['bob', 'tchu', 'angel']

// rotas
server.get('/users/:id', (req, res) => {
  const nome = req.query.nome;
  const id = req.params.id
  return res.json(users[id]);
});

// abrindo porta para o servidor
server.listen(3000);