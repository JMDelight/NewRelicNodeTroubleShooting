require('newrelic');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<a href="/stuff">Hello World!</a>');
});
app.get('/stuff', function (req, res) {
  //Pretending this is actually some amount of code that is causeing a delay and not just a timeout function call
  setTimeout(function(){
    res.send('<a href="/">Goodbye World!</a>');
  }, 10000);
});
app.get('/stuffs', function (req, res) {
  res.send('<a href="/">Goodbye World!</a>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
