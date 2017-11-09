var exec    = require('child_process').exec;
var gulp    = require('gulp');
var browser = require('browser-sync').create();
var inject  = require('gulp-inject');

// TODO - Add minification
// TODO - Add linter
// TODO - add sass -> css
// TODO - Add inject (automatically inject new file dependencies into index.html)

/**
 * Start node app on port 8080
 */
gulp.task('server', function (cb) {
  exec('cd server && node server.js', function (err, stdout, stderr) {
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

  browser.init({
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
  gulp.watch("./**/*.html").on('change', browser.reload);
  gulp.watch("./**/*.js").on('change', browser.reload);
  gulp.watch("./**/*.css").on('change', browser.reload);
});

//------------------------------------------------------------------------------

/**
 * Inject new .js and .css dependencies into index.html
 */
gulp.task('index', function () {
  var target = gulp.src('./index.html');

  var js  = './client/**/*.js';
  var css = './client/**/*.css';

  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src([js, css], {read: false});

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./'));
});
