(function() {
  try {
    angular.module(config.app.name).component('jdBackToTop', {

      css: "client/core/components/backToTop/backToTop.css",

      templateUrl: "client/core/components/backToTop/backToTop.template.html",

      controller: function() {
        // https://codepen.io/kruxor/pen/CwpFq

        $(window).scroll(function() {
          if ($(this).scrollTop() > 50) {
              $('.scrolltop:hidden').stop(true, true).fadeIn();
          } else {
              $('.scrolltop').stop(true, true).fadeOut();
          }
        });

        $(function() {
          $(".scroll").click(function() {
            $("html,body").animate({
              scrollTop:$(".thetop").offset().top
            },"1000");

            return false;
          }
        )});
      }

    });

  } catch (err) {
    console.error(err);
  }


})();
