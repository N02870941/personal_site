(function() {
  try {
    angular.module(config.app.name).component("jdWebsite", {

      template: `
        <jd-readme
          owner="n02870941"
          repo="personal_site"
        >
        </jd-readme>
      `
    });

  } catch (err) {
    console.error(err);
  }

})();
