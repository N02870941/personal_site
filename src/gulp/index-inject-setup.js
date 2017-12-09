var inject       = require('gulp-inject');
var concat       = require('gulp-concat');
var jsmin        = require('gulp-jsmin');
var dependencies = require('../config/client/dependencies.config.json');
var gulpConfig   = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {

  return function() {
    var sources = dependencies.js.setup;

    var injectOptions = {
      starttag: "<!-- inject:setup:{{ext}} -->",
      relative: true
    };
  
    return gulp.src(gulpConfig.indexPath)
        .pipe(inject(gulp.src(gulpConfig.dist + "/setup/*.js", {read : false}), injectOptions))
        .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
