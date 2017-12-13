var inject      = require('gulp-inject');
var concat      = require('gulp-concat');
var jsmin       = require('gulp-jsmin');
var runSequence = require('run-sequence');
var gulpConfig  = require('../config/gulp/gulp.config.json');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {
    var sources = [
      "./config/client/setup.js",
      './client/core/app/app.js',
      './client/**/*.js'
    ];

    // Copy all .js to ./dist folder for injection into index.html
    return gulp.src(sources)
        // .pipe(concat('scripts.min.js'))
        // .pipe(jsmin())
        .pipe(gulp.dest(gulpConfig.dist));
  }
};
