app.component('myContactMethod', {

  bindings: {
    href: "@",
    target: "@",
    iconClass: "@",
    text: "@",

    // NOTE - Temporary for iconClass
    x: "@"
  },

  controller: function() {

    this.$onInit = function() {

      // NOTE - Temporarily manually find iconClass attribute
      this.iconClass = JSON.parse(this.x)["iconClass"] + " grow";
    }

  },

  template: `
    <a
      class='charcoal-link'
      href="{{$ctrl.href}}"
      target="{{$ctrl.target=='_blank' ? '_blank' : '_self'}}">

     <i class="{{$ctrl.iconClass}}"></i>

    </a>

    <p>{{$ctrl.text}}</p>
  `,
});
