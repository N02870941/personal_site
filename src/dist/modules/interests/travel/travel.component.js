(function() {
  try {
    angular.module('interests').component('jdTravel', {

      templateUrl: "client/modules/interests/travel/travel.template.html",

      controller: function() {
        this.title = "Travel";

        // TODO - Temporary
        this.description = "";

        this.projects = [
          {
            title: "Colombia",
            name: "colombia",
            sref: 'colombia',
            img: "/client/modules/interests/travel/countries/colombia/img/flag_colombia.png",
            brief: ""
          },
          {
            title: "Ecuador",
            name: "ecuador",
            sref: 'ecuador',
            img: "/client/modules/interests/travel/countries/ecuador/img/flag_ecuador.png",
            brief: ""
          },
          {
            title: "Peru",
            name: "peru",
            sref: 'peru',
            img: "/client/modules/interests/travel/countries/peru/img/flag_peru.png",
            brief: ""
          },
          {
            title: "Senegal",
            name: "senegal",
            sref: 'senegal',
            img: "/client/modules/interests/travel/countries/senegal/img/flag_senegal.png",
            brief: ""
          },
          {
            title: "The Gambia",
            name: "gambia",
            sref: 'gambia',
            img: "/client/modules/interests/travel/countries/gambia/img/flag_gambia.png",
            brief: ""
          },
          {
            title: "Morocco",
            name: "morocco",
            sref: 'morocco',
            img: "/client/modules/interests/travel/countries/morocco/img/flag_morocco.png",
            brief: ""
          }
        ];

        this.showAllText = function() {
          this.showAll = !$scope.showAll;
        }

        this.showAll = false;
      }


    });

  } catch (err) {
    console.error(err);
  }

})();
