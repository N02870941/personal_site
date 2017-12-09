var htmlmin = require('gulp-htmlmin');

// Condence the HTML in index.html
module.exports = function(gulp) {
  return function() {

    var index = './index.html';

    // Concat all css and minify it into one file
    return gulp.src(index)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
  }
}
