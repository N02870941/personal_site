var inject       = require('gulp-inject');
var gulpConfig   = require('../config/gulp/gulp.config.json');

module.exports = function (gulp, plugins) {

  return function() {

    // Source patterns to inject into index.html
    var sources = [
      gulpConfig.dist + "/setup.js",
      gulpConfig.dist + "/**/*.js",
      gulpConfig.dist + "/*.css"
    ];

    return gulp.src(gulpConfig.indexPath)
        .pipe(inject(gulp.src(sources, {read : false}), {
          starttag: "<!-- inject:internal:{{ext}} -->",
          relative: true,
          transform: function(filepath, file, i, length) {

            // Get the file extension
            let ext = filepath.substr(filepath.lastIndexOf('.'));

            // Insert the inline attribute
            if (ext == ".js") {
              return `<script src="${filepath}"></script>`;

            } else if (ext == ".css") {
              return `<link rel="stylesheet" href="${filepath}" inline>`;
            }

          }
        }))
        .pipe(gulp.dest(gulpConfig.baseDir));
  }
};
