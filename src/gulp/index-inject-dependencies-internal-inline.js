var injectScripts = require('gulp-inject-scripts');
var inlinesource  = require('gulp-inline-source');
var gulpConfig    = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {
  return function() {

    // inject anything with inline tag (css)
    // inject the scripts
    return gulp.src(gulpConfig.indexPath)
      .pipe(inlinesource())
      .pipe(injectScripts({baseDir: gulpConfig.baseDir}))
      .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
