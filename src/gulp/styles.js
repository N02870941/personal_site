var inject = require('gulp-inject');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

module.exports = function (gulp, plugins) {
  return function() {

    // Concat all css and minify it
    return gulp.src('./client/core/style/**/*.css')
      .pipe(concat('styles.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./dist'));
  }
};
