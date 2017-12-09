var include     = require('gulp-html-tag-include');

module.exports = function (gulp) {

  return function() {
    var partialIndex = './client/core/markup/index.html';

    return gulp.src(partialIndex)
        .pipe(include())
        .pipe(gulp.dest('./'));
  }
};
