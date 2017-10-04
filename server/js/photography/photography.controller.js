var photographyService = require('./photography.service');


function getThumbnails(req, res) {
  var searchPath = '/client/pages/interests/photography/img/thumbnail/';
  var directory = __dirname + searchPath;

  // For Cross Origin support
  res.set('Access-Control-Allow-Origin', '*');

  // Send the list of files for use on client side
  var body = controller.getFileList(directory, searchPath);

  res.send(body);
}
