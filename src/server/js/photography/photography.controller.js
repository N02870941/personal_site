var photographyService = require('./photography.service');
const logger           = require('winston');

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
  var directory = dir + searchPath;

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  // Send the list of files for use on client side
  var body = photographyService.getFileList(directory, searchPath);

  res.send(body);
}

//------------------------------------------------------------------------------

module.exports = {
  getThumbnails: getThumbnails
}
