var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

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

app.get('/img/demo-screen-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'demo-screen-1.jpg'));
});

app.get('/img/bg-cta.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-cta.jpg'));
  });

app.get('/img/bg-pattern.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'bg-pattern.png'));
  });
  
app.get('/css/new-age.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'new-age.css'));
  });

app.get('/css/new-age.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'new-age.min.css'));
  });
  
app.get('/vendor/bootstrap/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/bootstrap/css', 'bootstrap.css'));
  });
  
app.get('/vendor/bootstrap/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/bootstrap/css', 'bootstrap.min.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups/device-mockups2.css', 'device-mockups2.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups.min.css'));
  });
  
app.get('/vendor/device-mockups/device-mockups2.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/device-mockups', 'device-mockups2.min.css'));
  });
  
app.get('/vendor/font-awesome/css/font-awesome.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/font-awesome/css', '/font-awesome.css'));
  });
  
app.get('/vendor/font-awesome/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/font-awesome/css', '/font-awesome.min.css'));
  });
  
app.get('/vendor/simple-line-icons/css/simple-line-icons.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'vendor/simple-line-icons/css', 'simple-line-icons.css'));
  });
  
app.get('/ui/yogi.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'yogi.gif'));
  });
  
  

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
