var include     = require('gulp-html-tag-include');
var gulpConfig  = require('../config/gulp/gulp.config.json');

module.exports = function (gulp) {

  return function() {

    // Piece together the partial files
    // that compose the index.html via
    // the <include> tags to have a complete
    // index.html, and copy it to the baseDir
    return gulp.src('./client/core/markup/index.html')
        .pipe(include())
        .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
