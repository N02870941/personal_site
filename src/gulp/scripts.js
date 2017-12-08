var inject = require('gulp-inject');
var concat = require('gulp-concat');
var jsmin  = require('gulp-jsmin');
var runSequence = require('run-sequence');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {
    // Copy all .js to ./dist folder for injection into index.html
    return gulp.src(['client/core/app/app.module.js', './client/**/*.js'])
        // .pipe(concat('scripts.min.js'))
        // .pipe(jsmin())
        .pipe(gulp.dest('./dist'));
  }
};
