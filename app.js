var express = require('express')
var app = express()
var path = require('path')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname + '/public')));

/** TEST ROUTES -- BEGIN **/
app.get('/test.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/test.html'));
});
app.get('/test_adapted.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/test_adapted.html'));
});

app.get('/artist_original', function(req, res) {
  res.sendFile(path.join(__dirname + '/artist_original.html'));
});

app.get('/artist_vertical', function(req, res) {
  res.sendFile(path.join(__dirname + '/artist_vertical.html'));
});
/** TEST ROUTES -- END **/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
