var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass   = require('gulp-sass');
var runSequence = require('run-sequence');

//------------------------------------------------------------------------------

function coreSCSS(gulp) {
  return function() {

    // Concat all css and minify it
    return gulp.src('./client/core/style/**/*.scss')  // Get all SCSS
      .pipe(sass().on('error', sass.logError))        // SCSS -> CSS
      .pipe(concat('styles.min.css'))                 // Concatenate into 1 file
      .pipe(minify())                                 // Minify it
      .pipe(gulp.dest('./dist'));                     // Save in ./dist
  }
}

//------------------------------------------------------------------------------

function scopedSCSS(gulp) {
  return function() {

    // SCSS -> CSS, same base folder
    return gulp.src('./client/core/components/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(gulp.dest('./client/core/components'));
  }
}

//------------------------------------------------------------------------------

module.exports = function(gulp) {
  gulp.task('scoped-scss', scopedSCSS(gulp));
  gulp.task('core-scss', coreSCSS(gulp));

  return function() {
    runSequence('core-scss', 'scoped-scss');
  }
};
