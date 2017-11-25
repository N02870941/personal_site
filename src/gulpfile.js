var exec         = require('child_process').exec;
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browser      = require('browser-sync').create();
var runSequence  = require('run-sequence');
var plugins      = require('gulp-load-plugins')();

// TODO - Add minification
// TODO - Add linter
// TODO - add sass -> css

gulp.task('serve', function() {

  // Start node app on port 8080
  exec('cd server && node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });

  browser.init({
    proxy: "localhost:8080" // makes a proxy for localhost:8080

  });

  gulp.watch("./**/*.html").on('change', browser.reload);
  gulp.watch("./**/*.js").on('change', browser.reload);
  gulp.watch("./**/*.{css, scss}").on('change', browser.reload);
});

//------------------------------------------------------------------------------

// Function for dynamically importing tasks
function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins);
}

//------------------------------------------------------------------------------

// Dynamically import all the tasks from the separate folder
gulp.task('font-awesome', getTask('font-awesome'));
gulp.task('inject-css', getTask('inject-css'));
gulp.task('inject-js', getTask('inject-js'));
gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));

//------------------------------------------------------------------------------

// Default task
gulp.task('default', function() {
  runSequence('font-awesome',
              'styles',
              'inject-css',
              'inject-js',
              'serve'
  );
});
