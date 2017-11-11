
// Dependencies
var photography_controller = require('./js/photography/photography.controller');
var photography_service    = require('./js/photography/photography.service');
var regression_service     = require('./js/regression/regression.service');
var file_io                = require('./js/utility/file_io');
const logger               = require('winston');
var express                = require('express');
var path                   = require('path');
var server                 = express();
var dir                    = path.resolve('..');

// Trivial change
// TODO - Add message to Slack saying online
// TODO - Add API key
// TODO - Clean up for if the server dies (ctrl + c, etc)

//  Start server
//------------------------------------------------------------------------------

/**
 * @description Set up the server (create thumbnails, etc)
 */
function setupServer(dir) {

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
  logger.log('info', "jabaridash.com listening on port: " + port);

}

// Setup HTTP methods on server
//------------------------------------------------------------------------------

server.get('/photography', function(req, res) {

  photography_controller.getThumbnails(req, res, dir);

});

//------------------------------------------------------------------------------

// var dir = path.join(__dirname, '../');

exports.dir = dir;

server.use(express.static(dir));

setupServer(dir);
startServer();
