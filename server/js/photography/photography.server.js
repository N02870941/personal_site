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
