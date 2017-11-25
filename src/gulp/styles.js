var inject = require('gulp-inject');
var concat = require('gulp-concat');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css
    gulp.src('./client/**/*.css')
      .pipe(concat('all.min.css'))
      .pipe(gulp.dest('./client/dist'));

    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src('./client/dist/**/*.min.css', {read : false});

    return gulp.src('./index.html')
            .pipe(inject(sources, {relative: true}))
            .pipe(gulp.dest('./'));
  }
};
