var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.sendfile('bar.html');
});

app.get('/data.csv', function (req, res) {
  res.sendfile('data.csv');
});

app.get('/data.json', function (req, res) {
  res.sendfile('data.json');
});

app.get('/newData.json', function (req, res) {
  res.sendfile('newData.json');
});

app.get('/commentsData.json', function (req, res) {
  res.sendfile('commentsData.json');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running at' + port);
});