var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Applying middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

var server = app.listen(9000, function() {
  var address = server.address().address;
  var port = server.address().port;
  console.log('Server listening on ' + address + ':' + port);
});
