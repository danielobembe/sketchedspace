var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname + '/public')));

app.get('/test.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/test.html'));
});
app.get('/test_adapted.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/test_adapted.html'));
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/concept.html'));
});

app.get('/concept.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/concept.html'));
});

app.get('/exhibitions.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/exhibitions.html'));
});

app.get('/artists.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/artists.html'));
});

app.get('/store.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/store.html'));
});

app.get('/news.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/news.html'));
});

app.listen(3000, function() {
  console.log("SketchedSpace: listening on port 3000.")
})
