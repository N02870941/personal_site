var inject = require('gulp-inject');
var concat = require('gulp-concat');
var jsmin  = require('gulp-jsmin');
var runSequence = require('run-sequence');

//------------------------------------------------------------------------------

function js(gulp) {
  return function() {

    // NOTE - temporarily do not minify for test purposes
    return gulp.src(['client/core/app/app.module.js', './client/**/*.js'])
      .pipe(concat('scripts.min.js'))
      // .pipe(jsmin())
      .pipe(gulp.dest('./dist'));
  }
}

//------------------------------------------------------------------------------

module.exports = function (gulp) {
  gulp.task('js', js(gulp));

  // Concatenante all JS, minifiy it
  return function() {
    runSequence('js');
  }
};
