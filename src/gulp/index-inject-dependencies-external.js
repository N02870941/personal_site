var inject       = require('gulp-inject');
var dependencies = require('../config/client/dependencies.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Concatenate these patterns with the external dependencies
    // to have a complete list of .js and .css dependencies
    // to inject into the index.html

    var index = './index.html';

    return gulp.src(index)
      .pipe(inject(gulp.src(dependencies.js.sources, {read : false}), {
        starttag: "<!-- inject:external:{{ext}} -->",
        relative: true,
      }))
      .pipe(gulp.dest('./'));
  }
};
