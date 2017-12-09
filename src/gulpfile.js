var exec         = require('child_process').exec;
var gulp         = require('gulp');
var browser      = require('browser-sync').create();
var runSequence  = require('run-sequence');
var plugins      = require('gulp-load-plugins')();
var bash         = require('./gulp/bash');
var serverConfig = require('./config/server/server.config.json');

// List of tasks from other files to import
var tasks = [
  "build-index",
  "compile-core-scss",
  "compile-scoped-scss",
  "copy-scripts",
  "cleanup",
  "fonts",
  "index-inject-dependencies-external",
  "index-inject-dependencies-internal",
  "index-inject-dependencies-internal-inline",
  'minify-core-css',
  'minify-app-js',
  'minify-inline-js',
  'minify-html',
  'photos'];

// Dynamically include (require) all the tasks
// from the above array
for (var i in tasks) {
  gulp.task(tasks[i], require('./gulp/' + tasks[i])(gulp, plugins));
}

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
  var port = serverConfig.ports.devPort;

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
  var port = serverConfig.ports.prodPort;

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
  runSequence(
    'cleanup',                                    // Delete old files
    // 'photos',                                     // Edit the photos via photo editing scripts
    'fonts',                                      // Download fonts
    'minify-core-css',                            // Compile and minify core scss into one file
    'compile-scoped-scss',                        // Compile custom scss to css, but do not include in ./dist or index.html
    'minify-app-js',                              // Concatenate and minify all angular code into scripts.min.js
    'build-index',                                // Build index.html from partials
    "index-inject-dependencies-internal",         // Inject dependencies (scripts.min.js)
    "index-inject-dependencies-internal-inline",  // Replace the <script> for scripts.min.js by injecting its contents into index.html
    "minify-inline-js",                           // Minify all inline JavaScript in index.html
    "index-inject-dependencies-external",         // Inject <script> tags for external dependencies such as angular.js
    'minify-html',                                // Minify the index.html by removing whitespace, etc
    'serve-prod');                                // Serve the page as if were being serve on the web (without browser-sync)
});

//------------------------------------------------------------------------------

/**
 * Set up and run the node app in dev mode
 */
gulp.task('dev', function() {
  runSequence(
    'cleanup',                              // Delete old files
    'fonts',                                // Download fonts
    'compile-core-scss',                    // Compile common scss (concatenate)
    'compile-scoped-scss',                  // Compile custom scss (dont include in main .css file)
    'copy-scripts',                         // Copy scripts into ./dist for deployment
    'build-index',                          // Put together the index.html file from its partials
    "index-inject-dependencies-external",   // Inject external dependency script tags into index.html
    "index-inject-dependencies-internal",   // Inject dependencies for files written by developer into index.html
    'serve-dev');                           // Run the server with browser-sync
});
