require('dotenv').config({path: __dirname + '/.env'});
var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');
var logger = require('./lib/logger');
var app = express();

var PORT = process.env.PORT || 3000;
var API_URL = process.env.API_URL;

logger.add('file', {filename: 'incoming.log'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('*', function(req, res) {
    logger.info('info', req.body);
    res.send('acknowledged');
});

app.listen(PORT, (req, res) => {
    console.log('Sensei Proxy');
    console.log('Listening on port ' + PORT)
});
