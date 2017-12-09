var inject       = require('gulp-inject');
var minify       = require('gulp-minify-css');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var gulpConfig   = require('../config/gulp/gulp.config.json');

module.exports = function(gulp) {
  return function() {

    // Concat all css and minify it into one file
    return gulp.src('./client/core/style/**/*.scss')  // Get all SCSS
      .pipe(sass().on('error', sass.logError))        // SCSS -> CSS
      .pipe(concat('styles.min.css'))                 // Concatenate into 1 file
      .pipe(minify())                                 // Minify it
      .pipe(gulp.dest(gulpConfig.dist));                     // Save in ./dist
  }
}
