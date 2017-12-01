(function() {
  var moduleName = 'app';
      // moduleName = 'example';

  /*
   * To finish creating a page that can be reached from the header
   * create a component with the following naming convention 'jdComponentName',
   * and change the name of moduleName to the desired module name (example) that you
   * inserted into the module array in the config.json file.
   */
  angular.module(moduleName).component('jdExample', {
    bindings: {
      title: '@'
    },

    template: `
      <h1>{{$ctrl.title}}</h1>

      <p>
        This is an example page. It is the landing page
        for a new angular module
      </p>
    `
  })
})();
