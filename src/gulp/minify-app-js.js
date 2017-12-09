var inject = require('gulp-inject');
var concat = require('gulp-concat');
var jsmin  = require('gulp-jsmin');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var pump = require('pump');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {

    // Concatenante all JS, minifiy it into one file
    return gulp.src(['client/core/app/app.module.js', './client/**/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(jsmin())
        // .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('./dist'));
  }
};
