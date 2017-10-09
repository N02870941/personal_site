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
    'client/pages/projects/projects/mlt/part1/img',
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
    const { stdout, stderr } = await exec('bash ./server/scripts/resize_imgs.sh ' + directoryIn + ' ' + directoryOut);

    // Show output
    if (stdout) {
      console.log('stdout:', stdout);
    }

    // Catch any erros
  } catch (err) {
    console.log('stderr:', err.stderr);

  }
}

//------------------------------------------------------------------------------

// Export for use in other *.js file
module.exports = {
  resizePhotos : resizePhotos
}
