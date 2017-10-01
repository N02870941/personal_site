const util = require('util');
const exec = util.promisify(require('child_process').exec);


//------------------------------------------------------------------------------

function resizePhotos() {
  var folders = [
    'client/pages/home/img',
    'client/pages/biography/img',
    'client/pages/contact/img',
    'client/pages/projects/img',
    'client/pages/resume/img',
    'client/pages/interests/img',
    'client/pages/interests/culture/img',
    'client/pages/interests/fitness/img',
    'client/pages/interests/photography/img',
    'client/pages/interests/travel/img'
  ];


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
    const { stdout, stderr } = await exec('bash ./server/scripts/resize_imgs.sh ' + directoryIn + ' ' + directoryOut);

    if (stdout) {
      console.log('stdout:', stdout);
    }


  } catch (err) {
    console.log('stderr:', err.stderr);

  }
}
//------------------------------------------------------------------------------

module.exports = {
  resizePhotos : resizePhotos
}
