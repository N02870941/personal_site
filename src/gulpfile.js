var exec         = require('child_process').exec;
var gulp         = require('gulp');
var browser      = require('browser-sync').create();
var runSequence  = require('run-sequence');
var plugins      = require('gulp-load-plugins')();

//------------------------------------------------------------------------------

// Function for dynamically importing tasks
function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins);
}

//------------------------------------------------------------------------------

// Dynamically import all the tasks from the separate folder
gulp.task('fonts', getTask('font-awesome'));
gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('inject-index', getTask('inject-index'));
gulp.task('delete-ds-store', getTask('delete-ds-store'));
gulp.task('delete-dist', getTask('delete-dist'));

//------------------------------------------------------------------------------

gulp.task('serve', function() {

  // Start node app on port 8080
  exec('cd server && node server.js', function (err, stdout, stderr) {

    if (stdout)
      console.log(stdout);

    if (stderr)
      console.log(stderr);
  });

  browser.init({proxy: "localhost:8080"});

  gulp.watch("./client/**/*.html").on('change', browser.reload);
  gulp.watch("./client/**/*.js", ['refresh']);
  gulp.watch("./client/**/*.{css,scss}", ['refresh']);
});

//------------------------------------------------------------------------------

gulp.task('reload', function() {
  browser.reload();
});

//------------------------------------------------------------------------------

gulp.task('refresh', function() {
  runSequence('styles', 'scripts', 'inject-index', 'reload');
});

//------------------------------------------------------------------------------

gulp.task('default', function() {
  runSequence('delete-ds-store',
              'delete-dist',
              'fonts',
              'styles',
              'scripts',
              'inject-index',
              'serve');
});
