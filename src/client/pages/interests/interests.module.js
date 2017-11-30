angular.module('interests', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
      .state('culture', {
        url: '/interests/culture',
        template: "<jd-culture></jd-culture>"
      })

      .state('fitness', {
        url: '/interests/fitness',
        template: "<jd-fitness></jd-fitness>"
      })

      .state('photography', {
        url: '/interests/photography',
        template: "<jd-photography></jd-photography>"
      })

      .state('travel', {
        url: '/interests/travel',
        template: "<jd-travel></jd-travel>"
      })

      .state('colombia', {
        url: '/interests/travel/colombia',
        template: "<jd-colombia></jd-colombia>"
      })

      .state('ecuador', {
        url: '/interests/travel/ecuador',
        template: "<jd-ecuador></jd-ecuador>"
      })

      .state('gambia', {
        url: '/interests/travel/gambia',
        template: "<jd-gambia></jd-gambia>"
      })

      .state('morocco', {
        url: '/interests/travel/morocco',
        template: "<jd-morocco></jd-morocco>"
      })

      .state('peru', {
        url: '/interests/travel/peru',
        template: "<jd-peru></jd-peru>"
      })

      .state('senegal', {
        url: '/interests/travel/senegal',
        template: "<jd-senegal></jd-senegal>"
      })
  });
