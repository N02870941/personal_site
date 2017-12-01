var inject = require('gulp-inject');

module.exports = function (gulp, plugins) {

  return function() {
    // Inject js and css dependencies into index.html
    // return gulp.src('./index.html')
    //     .pipe(inject(gulp.src('./dist/**/*min.{js,css}', {read : false}), {relative: true}))
    //     .pipe(gulp.dest('./'));

    // NOTE - TEMPORARY
    return gulp.src('./index.html')
        .pipe(inject(gulp.src('./dist/**/*.{js,css}', {read : false}), {relative: true}))
        .pipe(gulp.dest('./'));
  }
};
