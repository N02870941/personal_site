(function() {
  try {
    angular.module(config.app.name).component('jdProjectList', {

      bindings: {
        title: "@",
        description: "@",
        links: "="
      },
      templateUrl: "client/core/components/list/list.template.html",

      controller: function($sce) {

        var vm = this;

        vm.getSREF = function(sref) {
          return sref;

          // TODO - figure out how to get it to go to top
          // but when you click back button, back to where
          // you were


          // return sref + "({'#': 'top'})"
        }

        vm.$onInit = function() {

          // vm.title = $sce.trustAsHtml(vm.title);
          //
          // // TODO - convert to a component
          // vm.description = $sce.trustAsHtml(vm.description);
        }
      },

      controllerAs: "vm",
    });

  } catch (err) {
    console.error(err);
  }


})();
