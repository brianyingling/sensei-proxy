require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');
var app = express();

var PORT = process.env.PORT || 3000;
var API_URL = process.env.API_URL;

winston.add(winston.transports.File, {filename: 'incoming.log'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('*', function(req, res) {
    winston.log('info', req.body);
    // console.log(req.body);
});

app.listen(PORT, (req, res) => {
    console.log('Sensei Proxy');
    console.log('Listening on port ' + PORT)
});
