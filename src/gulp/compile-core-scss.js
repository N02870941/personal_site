var inject      = require('gulp-inject');
var minify      = require('gulp-minify-css');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var gulpConfig  = require('../config/gulp/gulp.config.json');

module.exports = function(gulp) {
  return function() {

    // Concat all scss in the core part of the app
    return gulp.src('./client/core/style/**/*.scss')  // Get all SCSS
      .pipe(sass().on('error', sass.logError))        // SCSS -> CSS
      .pipe(gulp.dest(gulpConfig.dist));              // Save in ./dist
  }
}
