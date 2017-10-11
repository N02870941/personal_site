
// Dependencies
var controller = require('./server/js/controller');
var util       = require('./server/js/setup');
var express    = require('express');
var path       = require('path');
var server     = express();

// TODO - Add message to Slack saying online
// TODO - Add API key
// TODO - Clean up for if the server dies (ctrl + c, etc)

//  Start server
//------------------------------------------------------------------------------

/**
 * @description Set up the server (create thumbnails, etc)
 */
function setupServer() {


  util.resizePhotos();
}

//------------------------------------------------------------------------------

/**
 * @description Start the server on a designated port
 */
function startServer() {
  var port = 8080;

  server.listen(port);

  // Notify use the server is up and running
  console.log("jabaridash.com listening on port: " + port);
}

// Setup HTTP methods on server
//------------------------------------------------------------------------------

server.get('/photography', function(req, res) {
  var searchPath = '/client/pages/interests/photography/img/thumbnail/';
  var directory = __dirname + searchPath;

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  // Send the list of files for use on client side
  var body = controller.getFileList(directory, searchPath);

  res.send(body);
});

//------------------------------------------------------------------------------

server.use(express.static(path.join(__dirname, '/')));

setupServer();
startServer();
