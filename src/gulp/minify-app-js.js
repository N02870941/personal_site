var inject       = require('gulp-inject');
var concat       = require('gulp-concat');
var jsmin        = require('gulp-jsmin');
var runSequence  = require('run-sequence');
var pump         = require('pump');
var gulpConfig   = require('../config/gulp/gulp.config.json');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {

    // Concatenante all JS, minifiy it into one file
    return gulp.src(['client/core/app/app.js', './client/**/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest(gulpConfig.dist));
  }
};
