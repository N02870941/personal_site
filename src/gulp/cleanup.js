var bash        = require('./bash');
var gulpConfig  = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {

  // Delete the ./dist folder before it gets recreated
  // so that old files do not get injected into index.html
  // and only files from the freshist copy gets injected
  //
  // Delete all .DS_Store files created by Finder in OS X
  var commands = [
    'rm -rf ' + gulpConfig.dist,
    'find . -name "*.DS_Store" -type f -delete'
  ];

  // Run all bash cleanup commands
  for (var i in commands)
    bash.runCommand(commands[i]);
};
