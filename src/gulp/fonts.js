const decompress = require('gulp-decompress');
var download     = require("gulp-download");

module.exports   = function (gulp, plugins) {

  // Download and unzip font awesome to the ./dist folder
  return function () {

    // TODO - Only download if its not already there

    return download("http://fontawesome.io/assets/font-awesome-4.7.0.zip")
     .pipe(decompress())
     .pipe(gulp.dest("./dist"));
  }
};
