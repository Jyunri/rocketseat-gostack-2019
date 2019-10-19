// importando o express
const express = require('express');

// executando express
const server = express();

// rotas
server.get('/teste', (req, res) => {
  return res.json({ message: 'Hello world' });
});

// abrindo porta para o servidor
server.listen(3000);