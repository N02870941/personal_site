var minifyInline        = require('gulp-minify-inline');
var minifyInlineScripts = require('gulp-minify-inline-scripts');
var gulpConfig          = require('../config/gulp/gulp.config.json');

// Minify inline JavaScript in index.html
module.exports = function(gulp) {
  return function() {

    // Concat all css and minify it into one file
    return gulp.src(gulpConfig.indexPath)
    // .pipe(minifyInline())
    // .pipe(minifyInlineScripts())
    .pipe(gulp.dest(gulpConfig.dist));
  }
}
