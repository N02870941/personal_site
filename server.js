var express  = require('express');
var path = require('path');
var server      = express();

var controller = require('./server/controller');

server.use(express.static(path.join(__dirname, '/')));

server.get('/photography', function(req, res) {
  var searchPath = '/client/pages/interests/photography/img/thumbnail';
  var directory = __dirname + searchPath;

  res.set('Access-Control-Allow-Origin', '*');

  var body = controller.getFileList(directory, searchPath);

  res.send(body);
});


// listen (start app with node server.js) ======================================
server.listen(8080);

console.log("App listening on port 8080");
