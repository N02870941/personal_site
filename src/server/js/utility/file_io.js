var http        = require('http');
const https     = require('https');
var  fs         = require('fs');
var Remarkable  = require('remarkable');
const logger    = require('winston');

//------------------------------------------------------------------------------

  /**
   * @desc Converts markdown to html
   */
  var md_to_html = function(src, dest) {

    // Get the markdown
    var md        = fs.readFileSync(src, "utf8");
    var converter = new Remarkable();
    var html      = converter.render(md);

    fs.writeFile(dest, html, function(error) {

      if (error) {
          return logger.log('error', error);
      }

      logger.log('info', dest + " was saved!");
    });
  }

//------------------------------------------------------------------------------

  /**
   * @desc Downloads a file to a specific location
   */
  var download = function(download) {

    var url      = download.url;
    var dest     = download.dest;
    var callback = download.callback;

    var file     = fs.createWriteStream(dest);
    var request  = https.get(url, function(response) {

      response.pipe(file);

      file.on('finish', function() {
        file.close(callback);  // close() is async, call callback after close completes.
      });

    }).on('error', function(err) { // Handle errors

      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (callback) callback(err.message);
    });
  };

//------------------------------------------------------------------------------

/**
 * @return list of files in a given directory
 */
var getFileList = function(directory, searchPath) {

  var fileList = fs.readdirSync(directory);

  for (var i = 0; i < fileList.length; i++) {
    fileList[i]= searchPath + fileList[i];
  }

  return fileList;
}

//------------------------------------------------------------------------------

module.exports = {
  getFileList: getFileList,
  download : download,
  md_to_html : md_to_html,
}