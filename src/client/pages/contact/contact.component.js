app.component('myContact', {

  controller: function() {
    this.title = "Contact me";

    this.methodsOfContact = [
      {
        alt: "email",
        href: "mailto:jabari.dash@gmail.com",
        iconClass: "fa fa-envelope fa-5x",
        text: "To reach out personally, send me email at jabari.dash@gmail.com",
        target: "_self"
      },
      {
        alt: "linkedin",
        href: "https://www.linkedin.com/in/jabaridash/",
        iconClass: "fa fa-linkedin fa-5x",
        text: "See my LinkedIn profile to get a more in depth perspective on my professional background.",
        target: "_blank"
      },
      {
        alt: "facebook",
        href: "https://www.facebook.com/dashjabari",
        iconClass: "fa fa-facebook fa-5x",
        text: "Keep up with me on Facebook.",
        target: "_blank"
      },
      {
        alt: "instagram",
        href: "https://www.instagram.com/jabaridash/",
        iconClass: "fa fa-instagram fa-5x",
        text: "Follow me on Instagram to see some of my latest photos!",
        target: "_blank"
      },
      {
        alt: "github",
        href: "https://github.com/N02870941",
        iconClass: "fa fa-github fa-5x",
        text: "If you would like to see some of my projects and coding examples, visit me on GitHub.",
        target: "_blank"
      },
      {
        alt: "stack-overflow",
        href: "https://stackoverflow.com/users/5063151/jabari-dash",
        iconClass: "fa fa-stack-overflow fa-5x",
        text: "See some of my answers on Stack Overflow",
        target: "_blank"
      }

    ];
  },

  // NOTE - Temporarily sending full object x because
  // iconClass cannot be resolved
  template: `
    <h2 name=heading>{{$ctrl.title}}</h2>

    <div ng-repeat="method in $ctrl.methodsOfContact">

      <my-contact-method
        iconClass="{{method.iconClass}}"
        href="{{method.href}}"
        target="{{method.target=='_blank' ? '_blank' : '_self'}}"
        text="{{method.text}}"

        x="{{method}}"
      >
      </my-contact-method>

    </div>
  `
});
