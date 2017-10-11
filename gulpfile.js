var exec = require('child_process').exec;
var gulp = require('gulp');
var bs = require('browser-sync').create();

// TODO - Add minification
// TODO - Add linter
// TODO - add sass -> css

/**
 * Start node app on port 8080
 */
gulp.task('server', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

//------------------------------------------------------------------------------

/**
 * Start Browser sync for port 8080
 */
gulp.task('browser-sync', function() {
  gulp.start('server');

  bs.init({
    // server: {
    //     baseDir: "./"
    // },
    proxy: "localhost:8080" // makes a proxy for localhost:8080
  });
});

//------------------------------------------------------------------------------

/**
 * Watch JS, HTML, and CSS files, reload on change
 */
gulp.task('start', ['browser-sync'], function () {
    gulp.watch("**/*.html").on('change', bs.reload);
    gulp.watch("**/*.js").on('change', bs.reload);
    gulp.watch("**/*.css").on('change', bs.reload);
});
