var inject = require('gulp-inject');
var concat = require('gulp-concat');
var jsmin  = require('gulp-jsmin');

module.exports = function (gulp, plugins) {

  // Concatenante all JS, minifiy it
  return function() {

    // NOTE - temporarily do not minify for test purposes
    return gulp.src(['client/core/app/app.module.js', './client/**/*.js'])
      .pipe(concat('scripts.min.js'))
      // .pipe(jsmin())
      .pipe(gulp.dest('./dist'));
  }
};
