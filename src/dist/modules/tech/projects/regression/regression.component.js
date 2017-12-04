(function() {
  try {
    angular.module(config.app.name).component("jdRegression", {

      template: `
        <jd-readme
          owner="n02870941"
          repo="least_squares_curve_fit"
        >
        </jd-readme>
      `
    });

  } catch (err) {
    console.error(err);
  }

})();
