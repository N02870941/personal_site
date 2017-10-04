
// Dependencies
var controller = require('./server/js/controller');
var util       = require('./server/js/setup');
var express    = require('express');
var path       = require('path');

//  Start server
//------------------------------------------------------------------------------

/**
 * @description Set up the server (create thumbnails, etc)
 */
function setupServer() {

  // TODO - other setup functions

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

//------------------------------------------------------------------------------


// Create server
var server     = express();
server.use(express.static(path.join(__dirname, '/')));

// Setup HTTP methods on server
//------------------------------------------------------------------------------

/**
 * @description returns list of relative addresses to thumbnail images.
 * This function is implemented on the back end because the photos may change.
 * and thus I do not want to hard code the list of photos that I will be displaying.
 * @param req HTTP Request from client
 * @param res HTTP Response that will be sent to client
 * @return List of all thumbnails
 */
server.get('/photography', function(req, res) {
  var searchPath = '/client/pages/interests/photography/img/thumbnail/';
  var directory = __dirname + searchPath;

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  // Send the list of files for use on client side
  var body = controller.getFileList(directory, searchPath);

  res.send(body);
});

setupServer();

startServer();
