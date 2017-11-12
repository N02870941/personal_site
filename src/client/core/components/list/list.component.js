app.component('projectList', {
  restrict: 'E',
  scope: {},

  bindings: {
    title: "@",
    description: "@",
    links: "="
  },

  controller: function($sce) {

    var vm = this;

    vm.$onInit = function() {

      // vm.title = $sce.trustAsHtml(vm.title);
      //
      // // TODO - convert to a component
      // vm.description = $sce.trustAsHtml(vm.description);
    }
  },

  controllerAs: "vm",
  templateUrl: 'client/core/components/list/list.template.html'

});
