const shell = require('gulp-shell')

module.exports = function(gulp) {

  return function() {
    var scriptPath = './gulp/scripts/resize_imgs.sh';
    var filePath = '<%= file.path %>';

    // Call the resize_imgs script to resize all the
    // images in client part of the app
    return gulp.src('client/**/img/', {read:false})
        .pipe(shell([
          scriptPath + ' ' + filePath + ' ' + filePath + '/thumbnail'
        ]));
  }
}
