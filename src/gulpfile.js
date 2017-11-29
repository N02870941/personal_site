var exec        = require('child_process').exec;
var gulp        = require('gulp');
var browser     = require('browser-sync').create();
var runSequence = require('run-sequence');
var plugins     = require('gulp-load-plugins')();
var bash        = require('./gulp/bash');
var config      = require('./gulp/config.json');
var tasks       = ["photos", "fonts", "core-scss", "scoped-scss", "scripts", "inject-index", "cleanup"];

// Dynamically include all the tasks from the above array
for (var i in tasks) {
  gulp.task(tasks[i], require('./gulp/' + tasks[i])(gulp, plugins));
}

//------------------------------------------------------------------------------

gulp.task('serve', function() {
  var port = config.devPort;

  // Start node app
  bash.runCommand('cd server && node server.js ' + port);

  browser.init({proxy: "localhost:" + port});

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
  var sequence = ['core-scss', 'scoped-scss', 'scripts', 'inject-index', 'reload'];

  runSequence(sequence);
});

//------------------------------------------------------------------------------

gulp.task('default', function() {
  runSequence('cleanup',
              'fonts',
              'core-scss',
              'scoped-scss',
              'scripts',
              'inject-index',
              'serve');
});
