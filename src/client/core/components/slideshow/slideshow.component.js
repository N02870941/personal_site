(function() {
  try {
    angular.module(config.app.name).component('jdSlideshow', {

      templateUrl: 'client/core/components/slideshow/slideshow.template.html',
      css: 'client/core/components/slideshow/slideshow.css',

      // controllerAs: "vm",

      controller: function() {

        var vm = this;

        this.imgs = [
          {
            src : "client/core/components/slideshow/img/ceazar_1.jpg",
            caption: 'took this with the 70-200mm'
          },
          {
            src : "client/core/components/slideshow/img/ceazar_2.jpg",
            caption: 'point and shoot'
          },
          {
            src : "client/core/components/slideshow/img/ceazar_3.jpg",
            caption: '50mm prime'
          }
        ];

        this.index = 0;

        this.increment = function() {
          this.index++;
          this.index = this.index >= this.imgs.length ? 0 : this.index;
        }

        this.decrement = function() {
          this.index--;
          this.index = this.index < 0 ? this.imgs.length-1 : this.index;
        }
      }

    });

  } catch (err) {
    console.error(err);
  }
})();
