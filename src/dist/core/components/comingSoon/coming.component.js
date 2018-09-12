(function() {
  try {
    angular.module(config.app.name).component('jdComingSoon', {
      template: "<h1>Coming Soon</h1>"
    });

  } catch (err) {
    console.error(err);
  }


})();
