var inject       = require('gulp-inject');
var dependencies = require('../client/config/javaScriptDepencies.json');

module.exports = function (gulp, plugins) {

  return function() {

    var patterns = [
      './dist/font-awesome-4.7.0/**/*.min.css',
      './dist/**/*.js',
      './dist/*.css'
    ];

    var sources = dependencies.sources.concat(patterns);

    // NOTE - TEMPORARY
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(sources, {read : false}), {relative: true}))
        .pipe(gulp.dest('./'));
  }
};
