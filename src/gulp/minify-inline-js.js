var minifyInline = require('gulp-minify-inline');
var minifyInlineScripts = require('gulp-minify-inline-scripts');

// Minify inline JavaScript in index.html
module.exports = function(gulp) {
  return function() {
    var index = './index.html';

    // Concat all css and minify it into one file
    return gulp.src(index)
    // .pipe(minifyInline())
    // .pipe(minifyInlineScripts())
    .pipe(gulp.dest('./'));
  }
}
