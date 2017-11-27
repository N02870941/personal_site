app.component("myFooter", {

  css: "client/core/components/footer/footer.css",

  templateUrl: 'client/core/components/footer/footer.template.html',

  controller: function() {

    this.options = [
      {
        href: "mailto:jabari.dash@gmail.com",
        icon_class: ["fa", 'fa-envelope ', 'fa-3x', "white-link"]
      },
      {
        href: "https://www.linkedin.com/in/jabaridash/",
        icon_class: ['fa', 'fa-linkedin', 'fa-3x', 'icon', 'white-link']
      },
      {
        href: "https://www.facebook.com/dashjabari",
        icon_class: ['fa', 'fa-facebook-official', 'fa-3x', 'icon', 'white-link']
      },
      {
        href: "https://www.instagram.com/jabaridash/",
        icon_class: ['fa', 'fa-instagram', 'fa-3x', 'icon', 'white-link']
      },
      {
        href: "https://github.com/N02870941",
        icon_class: ['fa', 'fa-github', 'fa-3x', 'icon', 'white-link']
      },
      {
        href: "https://stackoverflow.com/users/5063151/jabari-dash",
        icon_class: ['fa', 'fa-stack-overflow', 'fa-3x', 'icon', 'white-link']
      }
    ];
  }
});
