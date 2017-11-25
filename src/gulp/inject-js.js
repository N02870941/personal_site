var inject = require('gulp-inject');

module.exports = function (gulp, plugins) {
  return function() {
      return gulp.src('./index.html').pipe(
        inject(
          // specify module first so that following files
          // can find where the module is defined
          gulp.src(['./client/core/app/app.module.js', './client/**/*.js'], {read : false}),
          {
            relative: true
          }
        )
      ).pipe(gulp.dest('./'));
  }
};
