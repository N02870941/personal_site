(function() {
  try {
    angular.module(config.app.name).component("jdFooter", {

      css: "client/core/components/footer/footer.css",

      controller: function() {
        this.class = "fa fa-3x ";
        this.methodsOfContact = config.methodsOfContact;

        // for copyright
        this.year = new Date().getFullYear();
        this.author = config.site.author;
      },

      template: `
        <div class="navbar">
          <div style='display: table; margin: 0 auto;'>
              <a
                ng-repeat="option in $ctrl.methodsOfContact"
                class="grow"
                target="_blank"
                href="{{option.href}}">
                <i class="{{$ctrl.class + option.iconClass}}"></i>
              </a>
          </div>
        </div>
      ` +
      `
     <div id='copyright' class='navbar'>
       &copy ` + "{{$ctrl.year}}" + ' ' + `{{$ctrl.author}}` + `.
     </div>
     `
    });

  } catch (err) {
    console.error(err);
  }


})();
