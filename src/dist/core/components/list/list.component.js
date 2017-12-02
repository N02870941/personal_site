(function() {
  try {
    angular.module('app').component('jdProjectList', {

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

      template: `
        <h2>{{vm.title}}</h2>
        <p>{{vm.description}}</p>

        <div ng-repeat="item in vm.links" class='top-border'>

          <a href='{{item.href}}' class="charcoal-link">
            <div id={{item.name}}>
              <h2>{{item.title}}</h2>
              <img class='grow' ng-src='{{item.img}}'>
              <p>{{item.brief}}</p>
            </div>
          </a>

        </div>
      `
    });

  } catch (err) {
    console.error(err);
  }


})();
