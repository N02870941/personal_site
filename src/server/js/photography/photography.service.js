var  fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//------------------------------------------------------------------------------

/**
 * @desc Resize photos to thumbnail size for faster web page loading
 */
function resizePhotos() {
  var folders = [
    'client/pages/home/img',
    'client/pages/biography/img',
    'client/pages/contact/img',
    'client/pages/projects/img',
    'client/pages/projects/projects/target/img',
    'client/pages/projects/projects/mlt/part1/img',
    'client/pages/projects/projects/mlt/part2/img',
    'client/pages/projects/projects/mlt/part3/img',
    'client/pages/projects/projects/mlt/part4/img',
    'client/pages/tech/img',
    'client/pages/resume/img',
    'client/pages/interests/img',
    'client/pages/interests/culture/img',
    'client/pages/interests/fitness/img',
    'client/pages/interests/photography/img',
    'client/pages/interests/travel/img'
  ];

  // Loop through each fild directory and
  // create its thumbnails
  for (var i = 0; i < folders.length; i++) {
    var dir = __dirname + '/../../' + folders[i]

    batchEdit(dir, dir + '/thumbnail');

  }
}

//------------------------------------------------------------------------------

/**
 * @description Resize all original photos into thumbnails
 */
async function batchEdit(directoryIn, directoryOut) {
  console.log('Creating thumbnails photos...');

  try {

    // Run image resize shell script
    const { stdout, stderr } = await exec('bash ../../scripts/resize_imgs.sh ' + directoryIn + ' ' + directoryOut);

    // Show output
    if (stdout) {
      console.log('stdout:', stdout);
    }

    // Catch any errors
  } catch (err) {
    console.log('stderr:', err.stderr);

  }
}

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

  // Get list of files in the directory
  var fileList = fs.readdirSync(directory);

  // Prepend the searchPath to each file name in the list
  for (var i = 0; i < fileList.length; i++) {
    fileList[i]= searchPath + fileList[i];
  }

  // Give the list back
  return fileList;
}

//------------------------------------------------------------------------------

module.exports = {
  getFileList: getFileList,
  resizePhotos : resizePhotos
}
