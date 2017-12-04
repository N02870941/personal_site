(function() {
  try {
    angular.module(config.app.name).component("jdFooter", {

      controller: function() {
        this.class = "fa fa-3x ";
        this.methodsOfContact = config.methodsOfContact;
      },

      template: `
        <div class="navbar" style="width:100%">
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
      `
    });

  } catch (err) {
    console.error(err);
  }


})();
