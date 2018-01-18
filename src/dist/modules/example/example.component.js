(function() {

  try {
    /*
     * To finish creating a page that can be reached from the header
     * create a component with the following naming convention 'jdComponentName',
     * and change the name of moduleName to the desired module name (example) that you
     * inserted into the module array in the config.json file.
     */
    angular.module('example').component('jdExample', {
      bindings: {
        title: '@'
      },

      templateUrl : 'client/modules/example/example.template.html',

      css: 'client/modules/example/example.css',

      controller: function() {
        console.log('This is an example');

      }

    })
  } catch (err) {
    console.error(err);
  }

})();
