const serverless = require('serverless-http');
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!')
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);