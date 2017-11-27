var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass   = require('gulp-sass');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css and minify it
    return gulp.src('./client/core/style/**/*.scss')  // Get all SCSS
      .pipe(sass().on('error', sass.logError))        // SCSS -> CSS
      .pipe(concat('styles.min.css'))                 // Concatenate into 1 file
      .pipe(minify())                                 // Minify it
      .pipe(gulp.dest('./dist'));                     // Save in ./dist
  }
};
