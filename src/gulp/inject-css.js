var inject = require('gulp-inject');

module.exports = function (gulp, plugins) {
  return function() {
    var target = gulp.src('./index.html');

    var css = './client/core/style/**/*.css';

    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(css, {read : false});

    return target.pipe(
      inject(sources,
        {
          relative: true
        }
      )
    ).pipe(gulp.dest('./'));
  }
};
