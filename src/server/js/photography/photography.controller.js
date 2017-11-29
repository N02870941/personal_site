var server             = require('../../server');
var photographyService = require('./photography.service');
var file_io            = require('../utility/file_io');
const logger           = require('winston');

//------------------------------------------------------------------------------

/**
 * @description Set up the REST endpoints for the photography controller
 *
 * @param server The instance of the express() server object
 * @param dir The directory string to serve from
 */
function setUpController(server, dir) {
  photographyService.resizePhotos();

  server.get('/photography', function(req, res) {

    getThumbnails(req, res, dir);
  });
}

//------------------------------------------------------------------------------

/**
 * @description returns list of relative addresses to thumbnail images.
 * This function is implemented on the back end because the photos may change.
 * and thus I do not want to hard code the list of photos that I will be displaying.
 * @param req HTTP Request from client
 * @param res HTTP Response that will be sent to client
 * @return List of all thumbnails
 */
function getThumbnails(req, res, dir) {

  var searchPath = '/client/pages/interests/photography/img/thumbnail/';

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  // Send the list of files for use on client side
  res.send(file_io.getFileList(dir + searchPath, searchPath));
}

//------------------------------------------------------------------------------

module.exports = {
  setUpController : setUpController,
}
