const decompress = require('gulp-decompress');
var download     = require("gulp-download");
var dependencies = require('../config/client/dependencies.config.json');

module.exports = function (gulp, plugins) {
  var downloads = dependencies.downloads;

  // Download and unzip files that need
  // to be downloaded
  return function () {

    return download(downloads)
     .pipe(decompress())
     .pipe(gulp.dest("./dist"));
  }
};
