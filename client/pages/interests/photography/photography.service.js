app.service('photographyService', function($http, preloader) {
  var protocol = 'http';
  var domain = '127.0.0.1';
  var port = '8080';

  function getPhotoPaths() {
    var url = protocol + "://" + domain + ":" + port + "/photography";

    return $http.get(url).then(function(res) {

      return res.data;
    });
  }

  // Return functions
  return {
    getPhotoPaths : getPhotoPaths
  }

});
