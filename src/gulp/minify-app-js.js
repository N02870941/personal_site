var inject       = require('gulp-inject');
var concat       = require('gulp-concat');
var jsmin        = require('gulp-jsmin');
var runSequence  = require('run-sequence');
var pump         = require('pump');
var uglify       = require('gulp-uglify');
var gulpConfig   = require('../config/gulp/gulp.config.json');

//------------------------------------------------------------------------------

module.exports = function (gulp) {

  return function() {

    var sources = [
      './config/client/setup.js',
      './client/core/app/app.js',
      './client/**/*.js'
    ];

    // Concatenante all JS, minifiy it into one file
    return gulp.src(sources)
        .pipe(concat('scripts.min.js'))
        .pipe(jsmin())
        // .pipe(uglify().on('error', function(e){
        //     console.log(e);
        //  }))
        .pipe(gulp.dest(gulpConfig.dist));
  }
};
