const express = require('express');

const supplies = require('../supplies/suppliesModel.js');

const server = express();

server.use(express.json());

server.get('/', async(req, res) => {
  res.status(200).json({ server: 'works!' });
});

server.get('/supplies', async(req, res) => {
  const data = await supplies.getAll();
  res.status(200).json(data);
})

module.exports = server;