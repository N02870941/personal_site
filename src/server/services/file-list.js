var  fs       = require('fs');
const logger  = require('winston');

//------------------------------------------------------------------------------

/**
 * @description Returns the fully qualified paths of each file withitn a
 * specified path to search
 *
 * @param directory The specified directory to read the file list from
 * @param searchPath The path to be prepended to each filename in directory
 * @return list of files in a given directory with more qualified paths
 */
module.exports = function(directory, searchPath) {
  var fileList = fs.readdirSync(directory);

  for (var i in fileList)
    fileList[i]= searchPath + fileList[i];

  return fileList;
}
