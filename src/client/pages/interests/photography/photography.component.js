app.component('myPhotography', {

  templateUrl: "client/pages/interests/photography/templates/photography.template.html",
  controllerAs: "vm",
  controller: function(photographyService) {
    var vm = this;

    vm.showAllText = function() {
      vm.showAll = !vm.showAll;
    }

  //------------------------------------------------------------------------------

  vm.$onInit = function() {

    photographyService.getPhotoPaths().then(function(data) {
      vm.images = data;
    });

  }

  //------------------------------------------------------------------------------

    this.showAll = false;
    this.images = [];
  }

});
