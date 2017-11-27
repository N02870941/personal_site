var exec = require('child_process').exec;

module.exports = function (gulp, plugins) {

  // Delete the ./dist folder before it gets recreated
  // so that old files do not get injected into index.html
  // and only files from the freshist copy gets injected
  return function () {
    exec('rm -rf dist', function (err, stdout, stderr) {
      if (stdout)
        console.log(stdout);

      if (stderr)
        console.log(stderr);
    });
  }
};
