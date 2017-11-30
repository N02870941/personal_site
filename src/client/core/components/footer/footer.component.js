app.component("jdFooter", {

  controller: function() {
    this.class = "fa fa-3x ";
  },

  template: `
    <div class="navbar" style="width:100%">
      <div style='display: table; margin: 0 auto;'>
          <a
            ng-repeat="option in $root.methodsOfContact"
            class="grow"
            target="_blank"
            href="{{option.href}}">
            <i class="{{$ctrl.class + option.iconClass}}"></i>
          </a>

      </div>
    </div>
  `
});
