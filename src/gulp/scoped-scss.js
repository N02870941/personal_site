var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass   = require('gulp-sass');

module.exports = function(gulp) {
  return function() {

    // SCSS -> CSS, same base folder
    return gulp.src(['./client/**/*.scss', '!./client/core/style/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(gulp.dest('./client/'));
  }
}
