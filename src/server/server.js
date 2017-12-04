var photography_controller = require('./photography.controller');
var error_controller       = require('./error.controller')
const logger               = require('winston');
var express                = require('express');
var path                   = require('path');
var server                 = express();

//------------------------------------------------------------------------------

/**
 * @description Set up the server
 *
 * @param dir directory to serve the index.html from
 */
function setupServer(dir) {
  server.use(express.static(dir), function(req, res, next) {

    // Allow cross origin from any host
    res.setHeader('Access-Control-Allow-Origin', '*');

    next(); // NOTE - Figure out what, and why this works
  });

  // Set up the photography REST endpoint
  photography_controller(server, dir);
  error_controller(server, dir);
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

// Start the server
//------------------------------------------------------------------------------

setupServer(path.resolve('..'));
startServer(process.argv[2]);
