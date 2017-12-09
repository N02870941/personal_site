(function() {
  try {
    angular.module(config.app.name).component("jdFooter", {

      css: "client/core/components/footer/footer.css",
      templateUrl: "client/core/components/footer/footer.template.html",

      controller: function() {
        this.class = "fa fa-3x ";
        this.methodsOfContact = config.methodsOfContact;

        // for copyright
        this.year = new Date().getFullYear();
        this.author = config.site.author;
      }

    });

  } catch (err) {
    console.error(err);
  }


})();
