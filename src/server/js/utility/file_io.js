var  fs         = require('fs');
const logger    = require('winston');

//------------------------------------------------------------------------------

/**
 * @description Returns the fully qualified paths of each file withitn a
 * specified path to search
 *
 * @param directory The specified directory to read the file list from
 * @param searchPath The path to be prepended to each filename in directory
 * @return list of files in a given directory with more qualified paths
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
}
