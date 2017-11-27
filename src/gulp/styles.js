var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass   = require('gulp-sass');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css and minify it
    return gulp.src('./client/core/style/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./dist'));
  }
};
