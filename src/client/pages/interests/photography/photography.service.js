app.service('photographyService', function($http, domain) {
  var protocol = 'http';
  var domain = domain;
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
