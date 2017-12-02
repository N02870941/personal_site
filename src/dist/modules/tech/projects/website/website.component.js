(function() {
  try {
    angular.module('app').component("jdWebsite", {

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
