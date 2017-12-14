var exec         = require('child_process').exec;
var gulp         = require('gulp');
var browser      = require('browser-sync').create();
var runSequence  = require('run-sequence');
var plugins      = require('gulp-load-plugins')();
var bash         = require('./gulp/bash');
var serverConfig = require('./config/server/server.config.json');

// List of gulp tasks from other files to import
var tasks = [
  "build-index",
  "compile-core-scss",
  "compile-scoped-scss",
  "copy-scripts",
  "cleanup",
  "downloads",
  "index-inject-dependencies-external",
  "index-inject-dependencies-internal",
  "index-inject-dependencies-internal-inline",
  'minify-core-css',
  'minify-app-js',
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

gulp.task('watch-changes', function() {
  // Watch files for changes, refresh if any are changed
  gulp.watch("./client/core/markup/**/*.html", ['refresh']);
  gulp.watch("./client/**/*.{css,scss}", ['refresh']);
  gulp.watch("./client/**/*.{js,json}", ['refresh']);
  gulp.watch("./config/**/*.{js,json}", ['refresh']);
});

//------------------------------------------------------------------------------

/**
 * Before reloading the browser, execute a sequence
 * of commands to recompile SCSS -> CSS,
 * minify Js, inject dependencies into index.html, then reload
 */
gulp.task('refresh', function() {

  runSequence(
    'compile-core-scss',                    // Compile the core SCSS, move it to ./dist
    'compile-scoped-scss',                  // Compile custom SCSS, leave it where it is
    'copy-scripts',                         // Copy all .js script to ./dist
    'build-index',                          // Put the index.html together form its partials
    "index-inject-dependencies-external",   // Inject <script> tags for external dependencies such as angular.js
    "index-inject-dependencies-internal",   // Inject <script> tags for all other .js files in ./dist
    'reload');                              // Reload the web browser to view the changes
});

//------------------------------------------------------------------------------

/**
 * Serve the node app in development mode.
 * We use browser-sync to reload the page upon
 * edits to make development faster
 */
gulp.task('serve-dev', function() {

  // Start node app on a given port from the config file
  bash.runCommand('cd server && node server.js ' + serverConfig.ports.devPort);

  // Proxy browser-sync with the node app running on localhost
  browser.init({proxy: "localhost:" + serverConfig.ports.devPort});

  // Start the task that watches for file changes
  gulp.start('watch-changes');
});

//------------------------------------------------------------------------------

/**
 * Serve the app in normal mode, without browser-sync
 */
gulp.task('serve-prod', function() {

  // Start node app on a given port from the config file
  bash.runCommand('cd server && node server.js ' + serverConfig.ports.prodPort);
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
    'downloads',                                  // Download fonts
    'compile-scoped-scss',                        // Compile custom scss to css, but do not include in ./dist or index.html
    'minify-core-css',                            // Compile and minify core scss into one file
    'minify-app-js',                              // Concatenate and minify all angular code into scripts.min.js
    'build-index',                                // Build index.html from partials
    "index-inject-dependencies-internal",         // Inject dependencies (scripts.min.js)
    "index-inject-dependencies-internal-inline",  // Replace the <script> for scripts.min.js by injecting its contents into index.html
    "index-inject-dependencies-external",         // Inject <script> tags for external dependencies such as angular.js
    'minify-html',                                // Minify the index.html by removing whitespace, etc
    'serve-prod');                                // Serve the page as if were being serve on the web (without browser-sync)
});

//------------------------------------------------------------------------------

/**
 * Set up and run the node app in dev mode
 * No minification or concatenation for debugging
 * purposes
 */
gulp.task('dev', function() {
  runSequence(
    'cleanup',                              // Delete old files
    'downloads',                            // Download fonts
    'compile-core-scss',                    // Compile common scss
    'compile-scoped-scss',                  // Compile custom scss (dont include in main .css file)
    'copy-scripts',                         // Copy scripts into ./dist for deployment
    'build-index',                          // Put together the index.html file from its partials
    "index-inject-dependencies-external",   // Inject external dependency script tags into index.html
    "index-inject-dependencies-internal",   // Inject dependencies for files written by developer into index.html
    'serve-dev');                           // Run the server with browser-sync
});
