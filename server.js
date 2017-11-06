
// Dependencies
var photography_controller = require('./server/js/photography/photography.controller');
var photography_service = require('./server/js/photography/photography.service');
var regression_service = require('./server/js/regression/regression.service');
var file_io     = require('./server/js/utility/file_io');
var express     = require('express');
var path        = require('path');
var server      = express();

// Trivial change
// TODO - Add message to Slack saying online
// TODO - Add API key
// TODO - Clean up for if the server dies (ctrl + c, etc)

//  Start server
//------------------------------------------------------------------------------

/**
 * @description Set up the server (create thumbnails, etc)
 */
function setupServer() {

  regression_service.downloadReadMe(__dirname);

  photography_service.resizePhotos();
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

  photography_controller.getThumbnails(req, res, __dirname);

});

//------------------------------------------------------------------------------

server.use(express.static(path.join(__dirname, '/')));

setupServer();
startServer();
