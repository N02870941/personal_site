app.component('backToTop', {

  css: "client/core/components/backToTop/backToTop.css",

  template: `
  <div class='scrolltop'>
    <div class='scroll icon'><i class="fa fa-4x fa-angle-up"></i></div>
  </div>
  `,

  controller: function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
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
