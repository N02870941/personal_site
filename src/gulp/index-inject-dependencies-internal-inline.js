var inject       = require('gulp-inject');
var injectScripts = require('gulp-inject-scripts');
var minifyInline = require('gulp-minify-inline');

module.exports = function (gulp, plugins) {
  return function() {

    var index = './index.html';

    return gulp.src(index)
      .pipe(injectScripts({baseDir: "./"}))
      .pipe(gulp.dest('./'));
  }
};
