var photography_controller = require('./photography.controller');
var error_controller       = require('./error.controller');
var pdf_controller         = require('./pdf.controller');
var bodyParser             = require('body-parser')
const logger               = require('winston');
var express                = require('express');
var path                   = require('path');
var server                 = express();

// Crude mechanism for handling uncaughtExceptions
// TODO - find a better fix
process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

//------------------------------------------------------------------------------

/**
 * @description Set up the server
 *
 * @param dir directory to serve the index.html from
 */
function setupServer(dir) {

  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  server.use(bodyParser.json())

  // Service static page index.html
  server.use(express.static(dir), function(req, res, next) {

    // Allow cross origin from any host
    res.setHeader('Access-Control-Allow-Origin', '*');

    next(); // NOTE - Figure out what, and why this works
  });

  // Set up the REST controllers
  pdf_controller(server, dir);
  photography_controller(server, dir);
  error_controller(server);
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
