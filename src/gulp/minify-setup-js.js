var concat       = require('gulp-concat');
var jsmin        = require('gulp-jsmin');
var runSequence  = require('run-sequence');
var gulpConfig   = require('../config/gulp/gulp.config.json');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {

    // Concatenante all JS, minifiy it into one file
    return gulp.src('./config/client/scripts/*.js')
        .pipe(concat('setup.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest(gulpConfig.dist + "/setup"));
  }
};
