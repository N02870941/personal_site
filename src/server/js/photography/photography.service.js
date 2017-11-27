var server     = require('../../server');
var  fs        = require('fs');
const util     = require('util');
const exec     = util.promisify(require('child_process').exec);
const execSync = require('child_process').execSync;
const logger   = require('winston');

//------------------------------------------------------------------------------

/**
 * @desc Resize photos to thumbnail size for faster web page loading
 */
function resizePhotos() {
  var folders = [
    'client/pages/home/img',
    'client/pages/biography/img',
    'client/pages/projects/img',
    'client/pages/projects/projects/target/img',
    'client/pages/projects/projects/mlt/part1/img',
    'client/pages/projects/projects/mlt/part2/img',
    'client/pages/projects/projects/mlt/part3/img',
    'client/pages/projects/projects/mlt/part4/img',
    'client/pages/tech/img',
    'client/pages/interests/culture/img',
    'client/pages/interests/fitness/img',
    'client/pages/interests/photography/img',
    'client/pages/interests/travel/img'
  ];

  logger.log('info', 'Creating thumbnails for all pages that apply');

  // Loop through each fild directory and
  // create its thumbnails
  for (var i = 0; i < folders.length; i++) {

    var dir = server.dir + '/' + folders[i];

    batchEdit(dir, dir + '/thumbnail');

    console.log("\n--------------------------------------------------------\n");
  }
}

//------------------------------------------------------------------------------

/**
 * @description Resize all original photos into thumbnails
 */
async function batchEdit(directoryIn, directoryOut) {

  logger.log('info', 'Creating thumbnails for: ' + directoryIn);

  var bashCommand = 'bash ' + server.dir + '/server/scripts/resize_imgs.sh ';

  bashCommand = bashCommand + directoryIn + ' ' + directoryOut;

  try {

    logger.log('info', bashCommand);

    // Run image resize shell script
    // TODO - Synchronous or Asynchronous?
    const { stdout, stderr } = await exec(bashCommand);
    // const { stdout, stderr } = code = execSync(bashCommand);

    // Show output
    if (stdout) {

      logger.log('info', 'stdout: \n' + stdout);
    }

    // Catch any errors
  } catch (err) {

    logger.log('error', 'stderr: \n' + err.stderr);

  }
}

//------------------------------------------------------------------------------

module.exports = {
  resizePhotos : resizePhotos
}
