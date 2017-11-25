var inject = require('gulp-inject');

module.exports = function (gulp, plugins) {
  return function() {

    // Inject jss and css dependencies
    // into index.html
    return gulp.src('./index.html')
            .pipe(inject(gulp.src('./dist/**/*.min.{js,css}', {read : false}), {relative: true}))
            .pipe(gulp.dest('./'));
  }
};
