app.component('jdTravel', {

  controller: function() {
    this.title = "Travel";

    this.description = `
    <p>
      In the Spring 2013, I had the divine privilege of visiting West Africa. My
      middle school, <a href='http://www.learningtreeprep.org/' target='_blank'>The Learning Tree Cultural Preparatory School</a>
      brought the graduating 8th grade class on a trip across the atlantic that would
      change my life and world-view forever. <a ng-show='!showAll' href='' ng-click='showAllText()'>Read more...</a>
    </p>

    <div ng-show='showAll'>
      <p>
        I remember going through security at the airport, leaving my mother as I set
        off for Morocco. This was my first time on an airplane since I was very little, so
        every bit of turbulance seemed like the world was going to end. We got off the
        plane and I remember my first inhale of moroccan air - it tasted like heat. Not
        like hot sauce, and not like New York hot, I tasted heat for real this time.
      </p>

      <p>
        Throughout my twelve days in West Africa, we visited Morroco, Senegal and the
        Gambia - Senegal and The Gambia being my favorites. Some of the things that we
        did there included donating school supplies to students so that they could attend
        school, visiting former dungeons for enslaved people, and bartering in the street markets.
      </p>

      <p>
        Going to West Africa to a certain degree seemed like going back in time. But in
        retrospect, I'd realized that it was less so that I went back in time, rather living
        in New York is a privilege that does not reflect the rest of the world. I remember seeing people
        with diseases that to me, "didn't exist anymore" such as Polio, and extreme poverty.
        But, I also noticed that people seemed to be happier, and more genuine interactions
        with each other.
      </p>

      <p>
         Being in West Africa was a transformative experience for me. It in opened my eyes
         to just how many different corners of the world actually exist. Click on some of flags
         to see some photos and learn more about the countries that I have visited!
        <a href='' ng-click='showAllText()'>Show less<a>
      </p>
    </div>
    `

    // TODO - Temporary
    this.description = "";

    this.projects = [
      {
        title: "Colombia",
        name: "colombia",
        href:'#!/interests/travel/colombia#top',
        img: "/client/modules/interests/travel/countries/colombia/img/flag_colombia.png",
        brief: ""
      },
      {
        title: "Ecuador",
        name: "ecuador",
        href: '#!/interests/travel/ecuador#top',
        img: "/client/modules/interests/travel/countries/ecuador/img/flag_ecuador.png",
        brief: ""
      },
      {
        title: "Peru",
        name: "peru",
        href: '#!/interests/travel/peru#top',
        img: "/client/modules/interests/travel/countries/peru/img/flag_peru.png",
        brief: ""
      },
      {
        title: "Senegal",
        name: "senegal",
        href: '#!/interests/travel/senegal#top',
        img: "/client/modules/interests/travel/countries/senegal/img/flag_senegal.png",
        brief: ""
      },
      {
        title: "The Gambia",
        name: "gambia",
        href: '#!/interests/travel/gambia#top',
        img: "/client/modules/interests/travel/countries/gambia/img/flag_gambia.png",
        brief: ""
      },
      {
        title: "Morocco",
        name: "morocco",
        href: '#!/interests/travel/morocco#top',
        img: "/client/modules/interests/travel/countries/morocco/img/flag_morocco.png",
        brief: ""
      }
    ];

    this.showAllText = function() {
      this.showAll = !$scope.showAll;
    }

    this.showAll = false;
  },

  template: `
    <jd-project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </jd-project-list>
  `
});
