app.component("myReadme", {

  bindings: {
    owner: "@",
    repo: "@"
  },

  controller: function() {

    this.$onInit = function() {

      $('#readme').readme({
        owner: this.owner,
        repo: this.repo
      });
    }
  },

  template: "<div id='readme'></div>"
});
