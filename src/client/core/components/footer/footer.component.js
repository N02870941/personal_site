app.component("myFooter", {

  css: "client/core/components/footer/footer.css",

  controller: function() {
    this.class = "fa fa-3x icon white-link ";
  },

  template: `
    <ul class="navbar">
      <li class="grow" ng-repeat="option in $root.methodsOfContact">
        <a target="_blank" href="{{option.href}}">
          <i class="{{$ctrl.class + option.iconClass}}"></i>
        </a>
      </li>
    </ul>
  `
});
