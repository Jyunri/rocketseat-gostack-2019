// importando o express
const express = require('express');

// executando express
const server = express();

// rotas
server.get('/users/:id', (req, res) => {
  const nome = req.query.nome;
  const id = req.params.id
  return res.json({ message: `Hello ${nome}. Buscando id ${id}` });
});

// abrindo porta para o servidor
server.listen(3000);