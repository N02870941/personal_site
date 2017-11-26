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

//------------------------------------------------------------------------------

gulp.task('serve', function() {

  // Start node app on port 8080
  exec('cd server && node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });

  browser.init({
    proxy: "localhost:8080" // makes a proxy for localhost:8080

  });

  gulp.watch("./client/**/*.html").on('change', browser.reload);
  gulp.watch("./client/**/*.js", ['refresh']).on('change', browser.reload);
  gulp.watch("./client/**/*.css", ['refresh']).on('change', browser.reload);
});

//------------------------------------------------------------------------------

gulp.task('refresh', function() {
  runSequence('styles', 'scripts', 'inject-index');
});

//------------------------------------------------------------------------------

gulp.task('default', function() {
  runSequence('delete-ds-store', 'fonts', 'styles', 'scripts', 'inject-index', 'serve');
});
