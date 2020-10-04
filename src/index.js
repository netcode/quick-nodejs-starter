require('dotenv').config();
const debug = require('debug')('app:http');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  debug(`Example app listening at http://localhost:${port}`);
});
