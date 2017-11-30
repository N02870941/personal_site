app.component('jdContact', {

  controller: function($rootScope) {
    this.title = "Contact me";
    this.class = "grow fa fa-5x ";
  },

  template: `
    <h2 name=heading>{{$ctrl.title}}</h2>

    <div ng-repeat="method in $root.methodsOfContact">

      <jd-contact-method
        myclass="{{$ctrl.class + method.iconClass}}"
        href="{{method.href}}"
        target="{{method.target=='_blank' ? '_blank' : '_self'}}"
        text="{{method.text}}"
      >
      </jd-contact-method>

    </div>
  `
});