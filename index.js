var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "index.html" );
});

app.get('/about', function (req, res) {
  res.sendFile( __dirname + "/public/" + "about.html" );
});

app.get('/imprint', function (req, res) {
  res.sendFile( __dirname + "/public/" + "imprint.html" );
});

app.get('/vikki', function (req, res) {
  res.sendFile( __dirname + "/public/" + "vikki.html" );
});

app.get('/magda', function (req, res) {
  res.sendFile( __dirname + "/public/" + "magda.html" );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


