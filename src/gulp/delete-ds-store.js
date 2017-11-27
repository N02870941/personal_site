var exec = require('child_process').exec;

module.exports = function (gulp, plugins) {

  // Delete all .DS_Store files created by Finder in OS X
  return function () {
    exec('find . -name "*.DS_Store" -type f -delete', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  }
};
