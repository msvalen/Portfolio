const serverless = require('serverless-http');
const express = require('express');
const app = express();

require('dotenv').config();
const resumeRouter = require('./resume');
const projectsRouter = require('./projects');
const base_url = process.env.BASE_URL || '';

app.use(base_url+'/resume', resumeRouter);
app.use(base_url+'/projects', projectsRouter);
app.get(base_url+'/', (req, res) => res.json({ message: 'Welcome' }));

module.exports.handler = serverless(app)