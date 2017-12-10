var concat       = require('gulp-concat');
var jsmin        = require('gulp-jsmin');
var uglify       = require('gulp-uglify');
var gulpConfig   = require('../config/gulp/gulp.config.json');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {

    // Concatenante all JS, minifiy it into one file
    return gulp.src('./config/client/scripts/*.js')
        .pipe(concat('setup.min.js'))
        .pipe(jsmin())
        .pipe(uglify())
        .pipe(gulp.dest(gulpConfig.dist + "/setup"));
  }
};
