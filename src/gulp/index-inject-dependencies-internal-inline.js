var inject        = require('gulp-inject');
var injectScripts = require('gulp-inject-scripts');
var gulpConfig    = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {
  return function() {

    return gulp.src(gulpConfig.indexPath)
      .pipe(injectScripts({baseDir: gulpConfig.baseDir}))
      .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
