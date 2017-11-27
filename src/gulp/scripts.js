var inject = require('gulp-inject');
var concat = require('gulp-concat');
var jsmin  = require('gulp-jsmin');

module.exports = function (gulp, plugins) {
  return function() {

    // NOTE - debug
    // pump([gulp.src('./client/**/*.js'), concat('all.js'), uglify(), gulp.dest('./dist/')]);

    // Concatenante all JS, minifiy it
    // NOTE - temporarily do not minify for test purposes
    return gulp.src(['client/core/app/app.module.js', './client/**/*.js'])
      .pipe(concat('scripts.min.js'))
      .pipe(jsmin())
      .pipe(gulp.dest('./dist'));
  }
};
