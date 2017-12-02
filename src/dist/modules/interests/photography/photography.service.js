(function() {
  try {
    angular.module('interests').service('photographyService', function($http) {

      function getPhotoPaths(url) {

        return $http.get(url).then(function(res) {

          return res.data;
        });
      }

      // Return functions
      return {
        getPhotoPaths : getPhotoPaths
      }

    });

  } catch (err) {
    console.error(err);
  }

})();
