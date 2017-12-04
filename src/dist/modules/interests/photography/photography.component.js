(function() {
  try {
    angular.module('interests').component('jdPhotography', {

      templateUrl: "client/modules/interests/photography/photography.template.html",
      controllerAs: "vm",

      controller: function(photographyService, $location) {
        var vm = this;
        this.showAll = false;
        this.images = [];

      //------------------------------------------------------------------------------

        vm.showAllText = function() {
          vm.showAll = !vm.showAll;
        }

      //------------------------------------------------------------------------------

        vm.$onInit = function() {

          var domain = $location.host();
          var port = config.site.port;
          var url = $location.protocol() + "://" + domain + ":" + port + "/photography";

          photographyService.getPhotoPaths(url).then(function(data) {
            vm.images = data;
          });

        }
      }

    });

  } catch (err) {
    console.error(err);
  }

})();
