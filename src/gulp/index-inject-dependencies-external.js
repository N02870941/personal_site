var inject       = require('gulp-inject');
var dependencies = require('../config/client/dependencies.config.json');
var gulpConfig   = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Concatenate these patterns with the external dependencies
    // to have a complete list of .js and .css dependencies
    // to inject into the index.html

    return gulp.src(gulpConfig.indexPath)
      .pipe(inject(gulp.src(dependencies.js.sources, {read : false}), {
        starttag: "<!-- inject:external:{{ext}} -->",
        relative: true,
      }))
      .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
