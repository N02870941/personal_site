module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('./src/client/**/*.js')
        .pipe(plugins.concat('scripts.js'))
        // .pipe(plugins.uglify())
        .pipe(gulp.dest('./src/client/script/'));
  };
};
