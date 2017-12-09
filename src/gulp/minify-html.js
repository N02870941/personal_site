var htmlmin    = require('gulp-htmlmin');
var gulpConfig = require('../config/gulp/gulp.config.json');

// Condence the HTML in index.html
module.exports = function(gulp) {
  return function() {

    // Concat all css and minify it into one file
    return gulp.src(gulpConfig.indexPath)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(gulpConfig.dist));
  }
}
