var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
  bs.init({
    // server: {
    //     baseDir: "./"
    // },
    proxy: "localhost:8080" // makes a proxy for localhost:8080
  });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("**/*.html").on('change', bs.reload);
    gulp.watch("**/*.js").on('change', bs.reload);
    gulp.watch("**/*.css").on('change', bs.reload);
});
