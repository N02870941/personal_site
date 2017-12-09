var inject       = require('gulp-inject');
var dependencies = require('../config/client/dependencies.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Source patterns to inject into index.html
    var sources = [
      './dist/**/*.js',
      './dist/*.css'
    ];

    var index = './index.html';

    // NOTE - TEMPORARY
    return gulp.src(index)
        .pipe(inject(gulp.src(sources, {read : false}), {
          starttag: "<!-- inject:internal:{{ext}} -->",
          relative: true
        }))
        .pipe(gulp.dest('./'));
  }
};
