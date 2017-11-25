var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css
    return gulp.src('./client/**/*.css')
      .pipe(concat('styles.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./dist'));
  }
};
