var exec        = require('child_process').exec;
var gulp        = require('gulp');
var browser     = require('browser-sync').create();
var runSequence = require('run-sequence');
var plugins     = require('gulp-load-plugins')();
var bash        = require('./gulp/bash');
var include     = require('gulp-html-tag-include');
var config      = require('./config/gulp/gulp.config.json');

// List of tasks from other files to import
var tasks       = ["photos",
                   "fonts",
                   "compile-core-scss",
                   "compile-scoped-scss",
                   "copy-scripts",
                   "index-inject-dependencies-external",
                   "index-inject-dependencies-internal",
                   "index-inject-dependencies-internal-inline",
                   "cleanup",
                   'minify-core-css',
                   'minify-app-js',
                   'minify-inline-js',
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

  runSequence(
    'core-scss',
    'scoped-scss',
    'copy-scripts',
    'build-index',
    "index-inject-dependencies-external",
    "index-inject-dependencies-internal",
    'reload');
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
              'minify-core-css',
              'compile-scoped-scss',
              'minify-app-js',
              'build-index',
              "index-inject-dependencies-internal",
              "index-inject-dependencies-internal-inline",
              "minify-inline-js",
              "index-inject-dependencies-external",
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
              'compile-core-scss',
              'compile-scoped-scss',
              'copy-scripts',
              'build-index',
              "index-inject-dependencies-external",
              "index-inject-dependencies-internal",
              'serve-dev');
});
