(function() {
  try {
    angular.module(config.app.name).component("jdCluster", {

      template: `
        <jd-readme
          owner="n02870941"
          repo="discrete_and_continuous_algorithms"
        >
        </jd-readme>
      `
    });

  } catch (err) {
    console.error(err);
  }

})();
