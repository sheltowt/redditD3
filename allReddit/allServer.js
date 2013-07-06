var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.sendfile('all.html');
});

app.get('/all.json', function (req, res) {
  res.sendfile('all.json');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running at' + port);
});