var file_io = require('../utility/file_io');

//------------------------------------------------------------------------------

var downloadReadMe = function(dir) {
  var downloads = [
    {
      url: "https://raw.githubusercontent.com/N02870941/least_squares_curve_fit/master/doc/img/demo.png",
      dest: dir + "/client/pages/tech/projects/regression/doc/img/demo.png",
      callback: function () {

      }
    },
    {
      url : "https://raw.githubusercontent.com/N02870941/least_squares_curve_fit/master/README.md",
      dest : dir + "/client/pages/tech/projects/regression/README.md",
      callback : function () {

        file_io.md_to_html(dir + "/client/pages/tech/projects/regression/README.md",
                           dir + "/client/pages/tech/projects/regression/regression.html");

        file_io.md_to_pdf(dir + "/client/pages/tech/projects/regression/README.md",
                           dir + "/client/pages/tech/projects/regression/regression.pdf");
      }
    }

  ];

  // Download all necessary downloads
  for (var i = 0; i < downloads.length; i++) {
    file_io.download(downloads[i]);
  }

}


module.exports = {
  downloadReadMe : downloadReadMe
}
