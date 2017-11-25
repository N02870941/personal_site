var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css
    gulp.src('./client/**/*.css')
      .pipe(concat('styles.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./dist'));

    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src('./dist/**/*.min.css', {read : false});

    return gulp.src('./index.html')
            .pipe(inject(sources, {relative: true}))
            .pipe(gulp.dest('./'));
  }
};
