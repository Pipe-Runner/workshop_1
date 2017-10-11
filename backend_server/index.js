var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 9000;

// Applying middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./static')); //The static files HTML, CSS, JS are stored in this folder for serving the clients

// Handling get request
app.get('/testapiendpoint/get/', function(req, res) {
  console.log(req);
  res.send('Your GET request was successful. This is in response from the server');
});

// Handling post request
app.post('/testapiendpoint/post/', function(req, res) {
  console.log(req.body);
  res.send('Your POST request was successful. This is the response from the server');
});

// Assingment requests
app.get('/assignment/get/', function(req, res) {
  res.send('Hello there, your GET request was successful-- Assignment 1');
});

app.post('/assignment/post/', function(req, res) {
  res.send('Hello there, your POST request was successful-- Assignment 2');
});

var server = app.listen(PORT, function() {
  // var address = server.address().address;
  var port = server.address().port;
  console.log('Server listening on ' + port);
});
