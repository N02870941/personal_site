client.service('photographyService', function($http, preloader) {
  var protocol = 'http';
  var domain = 'jabaridash.com';
  var port = '8080';

  function getPhotoPaths() {
    var url = protocol + "://" + domain + ":" + port + "/photography";

    return $http.get(url).then(function(res) {
      preloader.preloadImages(res.data);

      return res.data;
    });
  }

  // Return functions
  return {
    getPhotoPaths : getPhotoPaths
  }

});
