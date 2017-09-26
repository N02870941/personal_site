var  fs = require('fs');

/**
 *
 */
var getFileList = function(directory, searchPath) {

  var fileList = fs.readdirSync(directory);

  for (var i = 0; i < fileList.length; i++) {
    fileList[i]= searchPath + fileList[i];
  }

  return fileList;
}


module.exports = {
  getFileList: getFileList
}
