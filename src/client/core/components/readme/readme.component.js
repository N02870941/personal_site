app.component("jdReadme", {

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

  template: `
    <jd-coming-soon></jd-coming-soon>
    <!-- <div id='readme'></div> -->
  `
});
