(function() {
  try {
    /**
     * Create custom directive that fires a function when the ecape button
     * is pressed (and released)
     */
     angular.module(config.app.name).directive('ngEsc', function () {
      return function (scope, element, attrs) {

        // Create event listener for the escape button
        // being pressed then released
        element.bind("keydown keypress keyup", function (event) {

          // If the escape key (key number 27) is pressed
          if (event.which === 27) {

            // Call the jd-esc function
            scope.$apply(function () {
              scope.$eval(attrs.ngEsc);
            });

            // TODO - What does this do?
            event.preventDefault();
          }
        });
      };
    });

  } catch (err) {
    console.error(err);
  }

})();
