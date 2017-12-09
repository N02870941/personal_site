var inject       = require('gulp-inject');
var dependencies = require('../config/client/dependencies.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Source patterns to inject into index.html
    var patterns = [
      './dist/font-awesome-4.7.0/**/*.min.css'
    ];

    // Concatenate these patterns with the external dependencies
    // to have a complete list of .js and .css dependencies
    // to inject into the index.html
    var sources = dependencies.js.sources.concat(patterns);

    var index = './index.html';

    // NOTE - TEMPORARY
    return gulp.src(index)
      .pipe(inject(gulp.src(sources, {read : false}), {
        starttag: "<!-- inject:external:{{ext}} -->",
        relative: true,
      }))
      .pipe(gulp.dest('./'));
  }
};
