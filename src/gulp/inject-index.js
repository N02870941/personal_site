var inject = require('gulp-inject');

module.exports = function (gulp, plugins) {

  // Inject js and css dependencies into index.html
  return function() {

    return gulp.src('./index.html')
            .pipe(inject(gulp.src('./dist/**/*min.{js,css}', {read : false}), {relative: true}))
            .pipe(gulp.dest('./'));
  }
};
