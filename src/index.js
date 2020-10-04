require('dotenv').config();
const debug = require('debug')('app:http');
const express = require('express');

const app = express();

const appURL = process.env.APP_URL || 'http://localhost';
const serverPort = process.env.SERVER_PORT || 3000;

// Main route
app.get('/', (req, res) => res.json({
  status: 'success',
  message: 'Hello World',
}));

// Health Check endpoint
app.get('/health', (req, res) => res.json({
  status: 'success',
  message: 'OK',
}));

// Listen
app.listen(serverPort, () => {
  debug(`${process.env.APP_NAME} listening at ${appURL}:${serverPort}`);
});
