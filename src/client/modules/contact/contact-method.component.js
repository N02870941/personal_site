(function() {
  try {
    angular.module('contact').component('jdContactMethod', {

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

  } catch (err) {
    console.error(err);
  }

})();
