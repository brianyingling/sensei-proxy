require('dotenv').config({path: __dirname + '/.env'});
var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var winston = require('winston');
var logger = require('./lib/logger');
var app = express();

var PORT = process.env.PORT || 3000;
var API_URL = process.env.API_URL;

logger.add('file', {filename: __dirname + '/incoming.log'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('*', function(req, res) {
    logger.info('info', req.body);
    axios
        .post(API_URL+'/temperatures', req.body)
        .then(response => {
            console.log('status:', response.status);
            console.log('data:', response.data);
        })
        .catch(err => console.error('error:', error));

    res.send('acknowledged');
});

app.listen(PORT, (req, res) => {
    console.log('Sensei Proxy');
    console.log('Listening on port ' + PORT)
});
