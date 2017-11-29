app.component('myContact', {

  controller: function($rootScope) {
    this.title = "Contact me";
    this.class = "grow fa fa-5x ";
  },

  template: `
    <h2 name=heading>{{$ctrl.title}}</h2>

    <div ng-repeat="method in $root.methodsOfContact">

      <my-contact-method
        myclass="{{$ctrl.class + method.iconClass}}"
        href="{{method.href}}"
        target="{{method.target=='_blank' ? '_blank' : '_self'}}"
        text="{{method.text}}"
      >
      </my-contact-method>

    </div>
  `
});
