var inject = require('gulp-inject');
var concat = require('gulp-concat');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all js
    gulp.src('./client/**/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist'));

    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src('./dist/*.js', {read : false});

    return gulp.src('./index.html')
            .pipe(inject(sources, {relative: true}))
            .pipe(gulp.dest('./'));
  }
};
