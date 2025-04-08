const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: a + b });
});

module.exports = app;