var inject       = require('gulp-inject');
var gulpConfig   = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Source patterns to inject into index.html
    var sources = [
      "!" + gulpConfig.dist + "/setup/*.js",
      gulpConfig.dist + "/**/*.js",
      gulpConfig.dist + "/*.css"
    ];

    // NOTE - TEMPORARY
    return gulp.src(gulpConfig.indexPath)
        .pipe(inject(gulp.src(sources, {read : false}), {
          starttag: "<!-- inject:internal:{{ext}} -->",
          relative: true
        }))
        .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
