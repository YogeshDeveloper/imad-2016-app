var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('img/demo-screen-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'demo-screen-1.jpg'));
});

app.get('img/bg-cta.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-cta.jpg'));
  });

app.get('img/bg-pattern.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-pattern.png'));
  });


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
