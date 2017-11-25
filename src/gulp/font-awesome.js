const decompress = require('gulp-decompress');
var download     = require("gulp-download");

module.exports = function (gulp, plugins) {
  return function () {
    var url = "http://fontawesome.io/assets/font-awesome-4.7.0.zip";

    return download(url)
     .pipe(decompress())
     .pipe(gulp.dest("./client/dist"));
  }
};
