app.component('myContactMethod', {

  bindings: {
    href: "@",
    target: "@",
    myclass: "@",
    text: "@",
  },

  template: `
    <a
      class='charcoal-link'
      href="{{$ctrl.href}}"
      target="{{$ctrl.target=='_blank' ? '_blank' : '_self'}}">

     <i class="{{$ctrl.myclass}}"></i>
    </a>

    <p>{{$ctrl.text}}</p>
  `,
});
