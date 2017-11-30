app.component('jdPhotography', {

  templateUrl: "client/modules/interests/photography/photography.template.html",
  controllerAs: "vm",

  controller: function(photographyService, $location, $rootScope) {
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
      var port = $rootScope.port;
      var url = $location.protocol() + "://" + domain + ":" + port + "/photography";

      console.log(url);

      photographyService.getPhotoPaths(url).then(function(data) {
        vm.images = data;
      });

    }
  }

});
