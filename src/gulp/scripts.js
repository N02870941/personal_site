var inject = require('gulp-inject');
var concat = require('gulp-concat');

module.exports = function (gulp, plugins) {
  return function() {
    gulp.src('./client/**/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./client/dist'));

    return gulp.src('./index.html')
      .pipe(inject(gulp.src('./client/dist/*.js', {read : false}),{relative: true}))
      .pipe(gulp.dest('./'));
  }
};
