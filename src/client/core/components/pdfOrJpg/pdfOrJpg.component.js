app.component('myPdfOrJpg', {
  
  bindings: {
    pdf: "@",
    jpg: "@"
  },

  controller: function(app) {

    this.$onInit = function() {

      this.templateUrl = app.pdfOrJpg(this.pdf, this.jpg);
    }
  },

  template: '<div ng-include="$ctrl.templateUrl">',
});
