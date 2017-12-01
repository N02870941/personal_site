angular.module('interests', ['shared', 'ui.router'])
  .config(function(jdStatesProvider, $stateProvider) {

    var states = [
      {
        name: 'culture',
        url: '/interests/culture',
        template: '<jd-culture></jd-culture>'
      },
      {
        name: 'fitnes',
        url: '/interests/fitness',
        template: '<jd-fitness></jd-fitness>'
      },
      {
        name: 'travel',
        url: '/interests/travel',
        template: '<jd-travel></jd-travel>'
      },
      {
        name: 'photography',
        url: '/interests/photography',
        template: '<jd-photography></jd-photography>'
      },
      {
        name: 'colombia',
        url: '/interests/travel/colombia',
        template: '<jd-colombia></jd-colombia>'
      },
      {
        name: 'ecuador',
        url: '/interests/travel/ecuador',
        template: '<jd-ecuador></jd-ecuador>'
      },
      {
        name: 'gambia',
        url: '/interests/travel/gambia',
        template: '<jd-gambia></jd-gambia>'
      },
      {
        name: 'morocco',
        url: '/interests/travel/morocco',
        template: '<jd-morocco></jd-morocco>'
      },
      {
        name: 'peru',
        url: '/interests/travel/peru',
        template: '<jd-peru></jd-peru>'
      },
      {
        name: 'senegal',
        url: '/interests/travel/senegal',
        template: '<jd-peru></jd-senegal>'
      }
    ];

    jdStatesProvider.initStates($stateProvider, states);
  });
