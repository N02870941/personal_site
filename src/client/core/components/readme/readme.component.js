app.component("myReadme", {

  bindings: {
    owner: "@",
    repo: "@"
  },

  controller: function() {

    this.$onInit = function() {

      // Gets a README.md from github.com
      $('#readme').readme({
        owner: this.owner,
        repo: this.repo
      });
    }
  },

  template: `
    <my-coming-soon></my-coming-soon>
    <!-- <div id='readme'></div> -->
  `
});
