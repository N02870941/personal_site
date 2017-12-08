var exec        = require('child_process').exec;
var gulp        = require('gulp');
var browser     = require('browser-sync').create();
var runSequence = require('run-sequence');
var plugins     = require('gulp-load-plugins')();
var bash        = require('./gulp/bash');
var config      = require('./gulp/config.json');
var include     = require('gulp-html-tag-include');

// List of tasks fro other files to import
var tasks       = ["photos",
                   "fonts",
                   "core-scss",
                   "scoped-scss",
                   "scripts",
                   "inject-index",
                   "cleanup",
                   'minify-css',
                   'minify-js',
                   'minify-html'];

// Dynamically include all the tasks from the above array
for (var i in tasks) {
  gulp.task(tasks[i], require('./gulp/' + tasks[i])(gulp, plugins));
}

//------------------------------------------------------------------------------

/**
 * Build index.html from partial .html files
 */
gulp.task('build-index', function() {
    return gulp.src('./client/core/markup/index.html')
        .pipe(include())
        .pipe(gulp.dest('./'));
});

//------------------------------------------------------------------------------

/**
 * Reload the browser
 */
gulp.task('reload', function() {
  browser.reload();
});

//------------------------------------------------------------------------------

/**
 * Before reloading the browser, execute a sequence
 * of commands to recompile SCSS -> CSS,
 * minify Js, inject dependencies into index.html, then reload
 */
gulp.task('refresh', function() {

  runSequence('core-scss', 'scoped-scss', 'scripts', 'build-index','inject-index', 'reload');
});

//------------------------------------------------------------------------------

/**
 * Serve the node app in development mode.
 * We use browser-sync to reload the page upon
 * edits to make development faster
 */
gulp.task('serve-dev', function() {
  var port = config.devPort;

  // Start node app
  bash.runCommand('cd server && node server.js ' + port);

  browser.init({proxy: "localhost:" + port});

  // Watch files for changes
  gulp.watch("./client/core/markup/**/*.html", ['refresh']);
  gulp.watch("./client/**/*.{js,json}", ['refresh']);
  gulp.watch("./client/**/*.{css,scss}", ['refresh']);
});

//------------------------------------------------------------------------------

// Serve the app in normal mode, without browser-sync
gulp.task('serve-prod', function() {
  var port = config.devPort;

  // Start node app
  bash.runCommand('cd server && node server.js ' + port);
})

//------------------------------------------------------------------------------

// Run the sequence of tasks and the
// app as if it were running on the
// actual server
// minified css, js, concatenated,
// photos shrunken, etc.
gulp.task('prod', function() {
  runSequence('cleanup',
              // 'photos',
              'fonts',
              'minify-css',
              'scoped-scss',
              'minify-js',
              'build-index',
              'inject-index',
              'minify-html',
              'serve-prod');
});

//------------------------------------------------------------------------------

/**
 * Set up and run the node app in dev mode
 */
gulp.task('dev', function() {
  runSequence('cleanup',
              'fonts',
              'core-scss',
              'scoped-scss',
              'scripts',
              'build-index',
              'inject-index',
              'serve-dev');
});
