(function() {
  try {
    angular.module(config.app.name).component("jdReadme", {

      bindings: {
        owner: "@",
        repo: "@"
      },

      controller: function() {

        this.$onInit = function() {

          // Gets a README.md from github.com
          // $('#readme').readme({
          //   owner: this.owner,
          //   repo: this.repo
          // });
        }
      },

      template: 
        "<jd-coming-soon></jd-coming-soon>" +
        "<!-- <div id='readme'></div> -->"
    });

  } catch (err) {
    console.error(err);
  }

})();
