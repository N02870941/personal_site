var server   = require('./server');
var fileList = require('./file-list');
const logger = require('winston');

//------------------------------------------------------------------------------

/**
 * @description Set up the REST endpoints for the photography controller.
 * resizes all of the photos before setting up the REST end point to serve their URLS
 *
 * @param server The instance of the express() server object
 * @param dir The directory string to serve from
 */
module.exports = function(server, dir) {

  /**
   * @description returns list of relative addresses to thumbnail images.
   * This function is implemented on the back end because the photos may change.
   * and thus I do not want to hard code the list of photos that I will be displaying.
   *
   * @param req HTTP Request from client
   * @param res HTTP Response that will be sent to client
   * @return List of all thumbnails
   */
  server.get('/photography', function(req, res) {

    var searchPath = '/client/pages/interests/photography/img/thumbnail/';

    // Send the list of files for use on client side
    res.send(fileList(dir + searchPath, searchPath));
  });

};
