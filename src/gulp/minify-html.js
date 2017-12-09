var htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');

module.exports = function(gulp) {
  return function() {

    // Concat all css and minify it into one file
    return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minifyInline())
    .pipe(gulp.dest('./'));
  }
}
