var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.sendfile('allCluster.html');
});

app.get('/allCluster.json', function (req, res) {
  res.sendfile('allCluster.json');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running at' + port);
});