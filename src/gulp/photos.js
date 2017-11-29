const shell = require('gulp-shell')

module.exports = function(gulp) {

  return function() {
    var scriptPath = './gulp/scripts/resize_imgs.sh';

    return gulp.src('client/**/img/', {read:false})
                .pipe(shell([
                  scriptPath + ' ' + '<%= file.path %>' + ' ' + '<%= file.path %>' + '/thumbnail'
                ]));

  }
}
