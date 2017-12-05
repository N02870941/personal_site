var  fs      = require('fs');
const logger = require('winston');

//------------------------------------------------------------------------------

/**
 * @description Set up the REST endpoints for serving PDF files
 *
 * @param server The instance of the express() server object
 * @param baseDir The directory string to serve from
 */
module.exports = function(server, baseDir) {

  // TODO - implement exception handling
  // so app does not crash if exception thrown
  server.get('/pdf', function(req, res) {

    // Create the fully qualified path
    var path = baseDir + "/" + req.query.path;

    // Read the file in
    var file = fs.createReadStream(path);
    var stat = fs.statSync(path);

    // Set the headers
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');

    // Send the file through response object
    file.pipe(res);


  });

};
