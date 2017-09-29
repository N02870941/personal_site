var controller = require('./server/js/controller');
var util       = require('./server/js/my_util');
var express    = require('express');
var path       = require('path');

// Create server
var server     = express();
server.use(express.static(path.join(__dirname, '/')));

// Setup HTTP methods on server
//------------------------------------------------------------------------------

/**
 * returns list of relative addresses to thumbnail images
 */
server.get('/photography', function(req, res) {
  var searchPath = '/client/pages/interests/photography/img/thumbnail/';
  var directory = __dirname + searchPath;

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  var body = controller.getFileList(directory, searchPath);

  res.send(body);
});

//  Start server
//------------------------------------------------------------------------------

var port = 8080

// util.resizePhotos('./server/scripts/resize_imgs.sh', ' ');
server.listen(port);

console.log("App listening on port: " + port);
