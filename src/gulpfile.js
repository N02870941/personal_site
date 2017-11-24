var exec        = require('child_process').exec;
var gulp        = require('gulp');
var browser     = require('browser-sync').create();
var inject      = require('gulp-inject');
var runSequence = require('run-sequence');
var download    = require("gulp-download");
const decompress = require('gulp-decompress');

// TODO - Add minification
// TODO - Add linter
// TODO - add sass -> css

//------------------------------------------------------------------------------

gulp.task('fontAwesome', function () {
  var url = "http://fontawesome.io/assets/font-awesome-4.7.0.zip";

  return download(url)
   .pipe(decompress())
   .pipe(gulp.dest("./client/core/style"));
});

//------------------------------------------------------------------------------

/**
 * Inserts .js dependencies into index.html
 */
gulp.task('js', function() {
    return gulp.src('./index.html').pipe(
      inject(
        // specify module first so that following files
        // can find where the module is defined
        gulp.src(['./client/core/app/app.module.js', './client/**/*.js'], {read : false}),
        {
          relative: true
        }
      )
    ).pipe(gulp.dest('./'));
});

//------------------------------------------------------------------------------

/**
 * Inserts .css dependencies into index.html
 */
gulp.task('css', function() {
  var target = gulp.src('./index.html');

  var css = './client/core/style/**/*.css';

  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(css, {read : false});

  return target.pipe(
    inject(sources,
      {
        relative: true
      }
    )
  ).pipe(gulp.dest('./'));
});

//------------------------------------------------------------------------------

/**
 * Start node app on port 8080
 */
gulp.task('start-server', function (callback) {
  exec('cd server && node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

//------------------------------------------------------------------------------

/**
 * Start Browser sync for port 3000
 */
gulp.task('browser-sync', function() {
  gulp.start('start-server');

  browser.init({
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
 * Start server in development mode,
 * running setup scripts first
 */
gulp.task('dev', function() {
    runSequence('fontAwesome','css', 'js', 'start');
});
