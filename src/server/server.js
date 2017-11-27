var photography_controller = require('./js/photography/photography.controller');
var photography_service    = require('./js/photography/photography.service');
const logger               = require('winston');
var express                = require('express');
var path                   = require('path');
var dir                    = path.resolve('..');
var server                 = express();

//------------------------------------------------------------------------------

// Trivial change
// TODO - Add message to Slack saying online
// TODO - Add API key
// TODO - Clean up for if the server dies (ctrl + c, etc)

//------------------------------------------------------------------------------

/**
 * @description Set up the server (create thumbnails, etc)
 *
 * @param dir directory to service the index.html from
 */
function setupServer(dir) {
  exports.dir = dir;
  server.use(express.static(dir));
  photography_service.resizePhotos();
}

//------------------------------------------------------------------------------

/**
 * @description Start the server on a designated port
 *
 * @param port The port number to run the node app on
 */
function startServer(port) {
  server.listen(port);
  logger.log('info', "jabaridash.com listening on port: " + port);
}

// Setup HTTP methods on server
//------------------------------------------------------------------------------

server.get('/photography', function(req, res) {

  photography_controller.getThumbnails(req, res, dir);
});

// Start the server
//------------------------------------------------------------------------------

setupServer(dir);
startServer(8080);
