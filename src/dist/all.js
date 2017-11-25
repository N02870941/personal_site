
// Create the module
var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ngSanitize', 'angularCSS']);

// Set  up routing for whole site
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/home/', {
      templateUrl: "client/pages/home/home.html"
    })

    .when('/biography/', {
      templateUrl: "client/pages/biography/biography.html"
    })

    .when('/resume/', {
      templateUrl: "client/pages/resume/resume.html"
    })

    .when('/projects/', {
      templateUrl: "client/pages/projects/projects.html"
    })

    .when('/tech/', {
      templateUrl: "client/pages/tech/tech.html"
    })

    .when('/projects/mlt', {
      templateUrl: "client/pages/projects/projects/mlt/mlt.html"
    })

    .when('/projects/target', {
      templateUrl: "client/pages/projects/projects/target/target.html"
    })

    .when('/projects/target/2016/2016', {
      templateUrl: "client/pages/projects/projects/target/2016/2016.html"
    })

    .when('/projects/target/2017/2017', {
      templateUrl: "client/pages/projects/projects/target/2017/2017.html"
    })

    .when('/projects/mlt/part1', {
      templateUrl: "client/pages/projects/projects/mlt/part1/part1.html"
    })

    .when('/projects/mlt/part2', {
      templateUrl: "client/pages/projects/projects/mlt/part2/part2.html"
    })

    .when('/projects/mlt/part3', {
      templateUrl: "client/pages/projects/projects/mlt/part3/part3.html"
    })

    .when('/projects/mlt/part4', {
      templateUrl: "client/pages/projects/projects/mlt/part4/part4.html"
    })

    .when('/tech/algorithms', {
      templateUrl: "client/pages/tech/projects/algorithms/algorithms.html"
    })

    .when('/tech/cluster', {
      templateUrl: "client/pages/tech/projects/cluster/cluster.html"
    })

    .when('/tech/regression', {
      templateUrl: "client/pages/tech/projects/regression/regression.html"
    })

    .when('/tech/temperature', {
      templateUrl: "client/pages/tech/projects/temperature/temperature.html"
    })

    .when('/tech/website', {
      templateUrl: "client/pages/tech/projects/website/website.html"
    })

    .when('/interests', {
      templateUrl: "client/pages/interests/interests.html"
    })

    .when('/interests/travel', {
      templateUrl: "client/pages/interests/travel/travel.html"
    })

    .when('/interests/travel/colombia', {
      templateUrl: "client/pages/interests/travel/countries/colombia/colombia.html"
    })

    .when('/interests/travel/ecuador', {
      templateUrl: "client/pages/interests/travel/countries/ecuador/ecuador.html"
    })

    .when('/interests/travel/peru', {
      templateUrl: "client/pages/interests/travel/countries/peru/peru.html"
    })

    .when('/interests/travel/senegal', {
      templateUrl: "client/pages/interests/travel/countries/senegal/senegal.html"
    })

    .when('/interests/travel/gambia', {
      templateUrl: "client/pages/interests/travel/countries/gambia/gambia.html"
    })

    .when('/interests/travel/morocco', {
      templateUrl: "client/pages/interests/travel/countries/morocco/morocco.html"
    })

    .when('/interests/photography', {
      templateUrl: "client/pages/interests/photography/photography.html"
    })

    .when('/interests/fitness', {
      templateUrl: "client/pages/interests/fitness/fitness.html"
    })

    .when('/interests/culture', {
      templateUrl: "client/pages/interests/culture/culture.html"
    })

    .when('/contact/', {
      templateUrl: "client/pages/contact/contact.html"
    })

    .when('/notFound', {
      templateUrl: "client/core/components/notFound/notFound.html"
    })

    .otherwise({
      redirectTo: "/notFound"
    });
});

app.component('myBiography', {

  controller: function() {
    this.title = "Biography";

  },

  templateUrl: "client/pages/biography/templates/biography.template.html"
});

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
  // iconClass cannot be resolved for whatever reason
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

app.component('myHome', {

  controller: function($location, $window) {
    this.title = "Welcome to JabariDash.com!";

    // TODO - Protect against rogue domains
    // if ($location.absUrl() != "http://jabaridash.com/#!/home") {
    //   alert('THIS PAGE IS FAKE');
    //
    //   $window.location.href = 'http://google.com'
    // }

    this.facts = [
      "I can't put a problem down until I solve it",
      "I'm a Software Engineer who loves to code",
      "An (aspiring) World traveler",
      "I skip leg day and I don't care",
      "I do math during my free time",
      "I pet dogs in the street - domestic or wild",
      "Struggling to be vegetarian"
    ];

    this.$onInit = function() {

      // Fix the padding for the lines
      // NOTE - find a better fix to get rid of CSS
      document.getElementById("left").style.float = "left";
      document.getElementById("left").style.width = "65%";
      document.getElementById("left").style.overflow = "hidden";

      document.getElementById("right").style.overflow = "hidden";

      document.getElementById("fun-facts").style.padding = 0;
    }
  },

  templateUrl: "client/pages/home/templates/home.template.html"
});

app.component('myInterests', {

  controller: function() {
    this.title = "Interests";

    this.description = `
      Below you can find links to some of my hobbies and things that make me who I am.
    `

    this.projects = [
      {
        title: "Travel",
        name: 'travel',
        href:'#!/interests/travel#top',
        img: "/client/pages/interests/travel/img/thumbnail/travel.jpg",
        brief: "Check out some of my most recent national and international journies!"
      },
      {
        title: "Photography",
        name: 'photography',
        href:'#!/interests/photography#top',
        img: "/client/pages/interests/photography/img/thumbnail/photography.jpg",
        brief: "See some of my favorite photos that I have taken!"
      },
      {
        title: "Fitness",
        name: 'fitness',
        href:'#!/interests/fitness#top',
        img: "/client/pages/interests/fitness/img/thumbnail/fitness.jpg",
        brief: "Here are some of my thoughts on fitness and the role it has played in my life."
      },
      {
        title: "Culture",
        name: 'culture',
        href:'#!/interests/culture#top',
        img: "/client/pages/interests/culture/img/thumbnail/culture.jpg",
        brief: "Follow my hair journey and other cultural experiences."
      }
    ];
  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component('myProjects', {

  controller: function() {
    this.title = "Projects";

    this.description = "Below you will find links to some of the projects" +
                         "and experiences that I have done outside of class";

    this.projects = [
      {
        title: "Being Black and Getting Your Foot in the Door",
        name: 'mlt',
        href:'#!/projects/mlt#top',
        img: "/client/pages/projects/img/thumbnail/mlt.jpg",
        brief: "A collaboration with Kadeen Douglas and Dr. Cruz Caridad Bueno of " +
               "the Black Studies Department at SUNY New Paltz to assist students of " +
               "color kickstart their professional development"
      },
      {
        title: "Two Summer Internships at Target",
        name: 'target',
        href:'#!/projects/target#top',
        img: "/client/pages/projects/img/thumbnail/target.png",
        brief: "Get a peek as to how I spent some of my summers at Target"
      }
    ];

  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component('myResume', {

  template: `
    <my-pdf-or-jpg
      pdf="client/pages/resume/img/resume.pdf#!page=1"
      jpg="/client/pages/resume/img/resume.png"
    </my-pdf-or-jpg>
  `
});

app.component('myTech', {

  controller: function() {
    this.title = "Tech Projects";

    this.description = `
       I am relatively new to developing personal projects - this website being one of them.
       But below, I have listed a couple of links to projects that I have worked on and
       a small write-up as to what skills I developed and things that I learned from each given project.
    `;

    this.projects = [
      {
        title: "Discrete and Continuous Algorithms and Data Structures",
        name: "algorithms",
        href:'#!/tech/algorithms#top',
        img: "/client/pages/tech/img/thumbnail/algorithms.png",
        brief: "C++ Implementation of common data structures and associate algorithms and interview questions"
      },
      {
        title: "Linear and Nonlinear Regression",
        name: "regression",
        href:'#!/tech/regression#top',
        img: "/client/pages/tech/img/thumbnail/regression.png",
        brief: "Basic Python UI that provided a data set displays best fit functions"
      },
      {
        title: "Temperature Collection at SUNY New Paltz",
        name: "temperature",
        href:'#!/tech/temperature#top',
        img: "/client/pages/tech/img/thumbnail/temperature.jpg",
        brief: "Distributed Raspberry Pi based project where we collected temperature data and visualized on a website"
      },
      {
        title: "My Personal Website",
        name: "website",
        href:'#!/tech/website#top',
        img: "/client/pages/tech/img/thumbnail/website.jpg",
        brief: "This website was completely written by me!"
      }
    ];

  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component('backToTop', {

  css: "client/core/components/backToTop/backToTop.css",

  template: `
  <div class='scrolltop'>
    <div class='scroll icon'><i class="fa fa-4x fa-angle-up"></i></div>
  </div>
  `,

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

app.component("myFooter", {

  css: "client/core/components/footer/footer.css",

  templateUrl: 'client/core/components/footer/footer.template.html',

  controller: function() {

    this.options = [
      {
        href: "mailto:jabari.dash@gmail.com",
        icon_class: ["fa", 'fa-envelope ', 'fa-3x', "white"]
      },
      {
        href: "https://www.linkedin.com/in/jabaridash/",
        icon_class: ['fa', 'fa-linkedin', 'fa-3x', 'icon', 'white']
      },
      {
        href: "https://www.facebook.com/dashjabari",
        icon_class: ['fa', 'fa-facebook-official', 'fa-3x', 'icon', 'white']
      },
      {
        href: "https://www.instagram.com/jabaridash/",
        icon_class: ['fa', 'fa-instagram', 'fa-3x', 'icon', 'white']
      },
      {
        href: "https://github.com/N02870941",
        icon_class: ['fa', 'fa-github', 'fa-3x', 'icon', 'white']
      },
      {
        href: "https://stackoverflow.com/users/5063151/jabari-dash",
        icon_class: ['fa', 'fa-stack-overflow', 'fa-3x', 'icon', 'white']
      }
    ];
  }
});

app.component('myComing', {

  templateUrl: "client/core/components/coming/templates/coming.template.html"
});

app.component('myHeader', {

  css: "client/core/components/header/header.css",

  templateUrl: 'client/core/components/header/header.template.html',

  controller: function() {

    var vm = this;

    this.hrefs = [
      {
        text: "Home",
        href: "#!home"
      },

      {
        text: "Biography",
        href: "#!biography"
      },

      {
        text: "Resume",
        href: "#!resume"
      },
      {
        text: "Projects",
        href: "#!projects"
      },
      {
        text: "Tech",
        href: "#!tech"
      },
      {
        text: "Interests",
        href: "#!interests"
      },
      {
        text: "Contact",
        href: "#!contact"
      }
    ];

//------------------------------------------------------------------------------

    this.navBar = function() {
      var topnav = document.getElementById("myTopnav");

      // Switch class name to the mobile version
      if (topnav.className === "topnav") {
          topnav.className += " responsive";

        // Switch class name to desktop version
      } else {
          topnav.className = "topnav";
      }
    }

//------------------------------------------------------------------------------

    this.hideNavBarOptions = function() {

      var navBar = document.getElementById("myTopnav");

      navBar.className = 'topnav';

    }

//------------------------------------------------------------------------------

    this.$onInit= function() {

      $(document).ready(function() {
         $(document).click(function(e) {
             if ($(e.target).is('#myTopnav,#myTopnav *')) {
                 return;
             }
             else {

               vm.hideNavBarOptions();
             }
         });
       });
    }

//------------------------------------------------------------------------------
  }
});

app.component('projectList', {
  restrict: 'E',
  scope: {},

  bindings: {
    title: "@",
    description: "@",
    links: "="
  },

  controller: function($sce) {

    var vm = this;

    vm.$onInit = function() {

      // vm.title = $sce.trustAsHtml(vm.title);
      //
      // // TODO - convert to a component
      // vm.description = $sce.trustAsHtml(vm.description);
    }
  },

  controllerAs: "vm",
  templateUrl: 'client/core/components/list/list.template.html'

});

app.component("myModal", {

  bindings: {
    images: "<",
  },

  css: "client/core/components/modal/modal.css",

  templateUrl: "client/core/components/modal/templates/modal.template.html",
  controllerAs: "vm",
  controller: function() {

    var vm = this;

    this.setupModal = function(imgID) {
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(imgID);
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");

      img.onclick = function() {
          modal.style.display = "block";
          modalImg.src = this.src;
          // captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // If the user clicks escape
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
          modal.style.display = "none";
        }
      });
    }
  }
});

app.component('myNotFound', {

  template: `
    <h1>Page Not Found</h1>

    <p>You should be automatically redirected in <span id="seconds">5</span> seconds.
    </p>
  `
  ,

  controller: function($location, $window) {
    var seconds = 5; // seconds for HTML
    var foo; // variable for clearInterval() function

    function redirect() {
      var protocol = $location.protocol();
      var host = $location.host();
      var port = $location.port();

      var url = protocol + "://" + host + ":" + port + "/#!/home";

      $window.location.href = url;
    }

    function updateSecs() {
      document.getElementById("seconds").innerHTML = seconds;
      seconds--;
      if (seconds == -1) {
        clearInterval(foo);
        redirect();
      }
    }

    function countdownTimer() {
      foo = setInterval(function () {
        updateSecs()
      }, 1000);
    }

    countdownTimer();
  }

});

app.component('myPdfOrJpg', {

  bindings: {
    pdf: "@",
    jpg: "@",
  },

  css: "client/core/components/pdfOrJpg/pdfOrJpg.css",

  controller: function() {

    this.pdfTemplateUrl = "client/core/components/pdfOrJpg/templates/pdf.template.html";
    this.jpgTemplateUrl = "client/core/components/pdfOrJpg/templates/jpg.template.html";

    this.$onInit = function() {

      /**
       * Dynamically choose to display the PDF version or PNG verion
       */
      if (window.matchMedia( "(min-width: 600px)" ).matches) {

        this.templateUrl = this.pdfTemplateUrl;
        this.src = this.pdf;

      } else {

        this.templateUrl = this.jpgTemplateUrl;
        this.src = this.jpg;
      }
    }
  },

  template: '<div ng-include="$ctrl.templateUrl">',
});

app.component("myReadme", {

  bindings: {
    owner: "@",
    repo: "@"
  },

  controller: function() {

    this.$onInit = function() {

      // Gets a README.md from github.com
      $('#readme').readme({
        owner: this.owner,
        repo: this.repo
      });
    }
  },

  template: `
    <my-coming></my-coming>
    <!-- <div id='readme'></div> -->
  `
});

/**
 * Create custom directive that fires a function when the ecape button
 * is pressed (and released)
 */
app.directive('ngEsc', function () {
  return function (scope, element, attrs) {

    // Create event listener for the escape button
    // being pressed then released
    element.bind("keydown keypress keyup", function (event) {

      // If the escape key (key number 27) is pressed
      if (event.which === 27) {

        // Call the ng-esc function
        scope.$apply(function () {
          scope.$eval(attrs.ngEsc);
        });

        // TODO - What does this do?
        event.preventDefault();
      }
    });
  };
});

app.component('myContactMethod', {

  bindings: {
    href: "@",
    target: "@",
    iconClass: "@",
    text: "@",

    // NOTE - Temporary for iconClass
    x: "@"
  },

  controller: function() {

    this.$onInit = function() {

      // NOTE - Temporarily manually find iconClass attribute
      this.iconClass = JSON.parse(this.x)["iconClass"] + " grow";
    }

  },

  template: `
    <a
      class='large-font-awesome-icon'
      href="{{$ctrl.href}}"
      target="{{$ctrl.target=='_blank' ? '_blank' : '_self'}}">

     <i class="{{$ctrl.iconClass}}"></i>

    </a>

    <p>{{$ctrl.text}}</p>
  `,
});

app.component('myPhotography', {

  templateUrl: "client/pages/interests/photography/templates/photography.template.html",
  controllerAs: "vm",
  controller: function(photographyService) {
    var vm = this;

    vm.showAllText = function() {
      vm.showAll = !vm.showAll;
    }

  //------------------------------------------------------------------------------

  vm.$onInit = function() {

    photographyService.getPhotoPaths().then(function(data) {
      vm.images = data;
    });

  }

  //------------------------------------------------------------------------------

    this.showAll = false;
    this.images = [];
  }

});

app.service('photographyService', function($http) {
  var protocol = 'http';
  var domain = 'jabaridash.com';
  var port = '8080';

  function getPhotoPaths() {
    var url = protocol + "://" + domain + ":" + port + "/photography";

    return $http.get(url).then(function(res) {

      return res.data;
    });
  }

  // Return functions
  return {
    getPhotoPaths : getPhotoPaths
  }

});

app.component('myTravel', {

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
        img: "/client/pages/interests/travel/countries/colombia/img/flag_colombia.png",
        brief: ""
      },
      {
        title: "Ecuador",
        name: "ecuador",
        href: '#!/interests/travel/ecuador#top',
        img: "/client/pages/interests/travel/countries/ecuador/img/flag_ecuador.png",
        brief: ""
      },
      {
        title: "Peru",
        name: "peru",
        href: '#!/interests/travel/peru#top',
        img: "/client/pages/interests/travel/countries/peru/img/flag_peru.png",
        brief: ""
      },
      {
        title: "Senegal",
        name: "senegal",
        href: '#!/interests/travel/senegal#top',
        img: "/client/pages/interests/travel/countries/senegal/img/flag_senegal.png",
        brief: ""
      },
      {
        title: "The Gambia",
        name: "gambia",
        href: '#!/interests/travel/gambia#top',
        img: "/client/pages/interests/travel/countries/gambia/img/flag_gambia.png",
        brief: ""
      },
      {
        title: "Morocco",
        name: "morocco",
        href: '#!/interests/travel/morocco#top',
        img: "/client/pages/interests/travel/countries/morocco/img/flag_morocco.png",
        brief: ""
      }
    ];

    this.showAllText = function() {
      this.showAll = !$scope.showAll;
    }

    this.showAll = false;
  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component('myMlt', {

  controller: function() {
    this.title = "Being Black and Getting Your Foot in the Door";

    this.description = `
      Being Black and Getting Your Foot in the Door is a four part series dedicated
      to the professional advancement of students of color at SUNY New Paltz. On this
      project I am working with Dr. Cruz Caridad Bueno and Kadeen Douglas to help
      students develop their resumes, apply to programs such as MLT Career Prep, and
      take charge of their professional lives.
    `;

    this.projects = [
      {
       title: "Part 1: Informational",
       name: "part1",
       href:'#!/projects/mlt/part1#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "The first of our series is an informational in which we " +
              "introduce students to the MLT Career Prep Program (CP), speak about our experiences " +
              "in the CP, and give an overview on how to apply."
      },
      {
       title: "Part 2: Resume Writing Workshop",
       name: "part2",
       href:'#!/projects/mlt/part2#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "The second in the series is a resume writing workshop where " +
              "students will work with professionals to strengthen their resumes and short essays " +
              "for their MLT applications."
      },
      {
       title: "Part 3: Keys to Success Panel",
       name: "part3",
       href:'#!/projects/mlt/part3#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "In part 3 there will be a panel discussion where professionals will speak to students " +
              "about some of the keys to success in the working world."
      },
      {
       title: "Part 4: Wrap up",
       name: "part4",
       href:'#!/projects/mlt/part4#top',
       img: "/client/pages/projects/img/thumbnail/mlt.jpg",
       brief: "We will close our series with a session in which students will have the opportunity " +
              "to meet with professionals to make finishing touches to their MLT Career Prep applications."
      }
    ];
  },

  template: `
    <project-list
      title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component('myTarget', {

  controller: function() {
    this.title = "Two Summer Internships at Target";

    this.description = `
      Throughout my college career, I have intered twice at Target Corporation
      as a Software Engineer. Below you can find out more about my experience
      with Target!
    `;

    this.projects = [
      {
        title: "Summer 2016",
        name: 'summer2016',
        href:'#!/projects/target/2016/2016#top',
        img: "/client/pages/projects/projects/target/img/thumbnail/target.png",
        brief: `
          My first summer at Target in 2016.
        `
      },
      {
        title: "Summer 2017",
        name: 'summer2017',
        href:'#!/projects/target/2017/2017#top',
        img: "/client/pages/projects/projects/target/img/thumbnail/target.png",
        brief: `
          My second summer at Target in 2017.
        `
      },
    ];

  },

  template: `
    <project-list title='{{$ctrl.title}}'
      description="{{$ctrl.description}}"
      links="$ctrl.projects">
    </project-list>
  `
});

app.component("myAlgorithms", {

  template: `
    <my-readme
      owner="n02870941"
      repo="discrete_and_continuous_algorithms"
    >
    </my-readme>
  `
});

app.component("myCluster", {

  template: `
    <my-readme
      owner="n02870941"
      repo="discrete_and_continuous_algorithms"
    >
    </my-readme>
  `
});

app.component("myRegression", {

  template: `
    <my-readme
      owner="n02870941"
      repo="least_squares_curve_fit"
    >
    </my-readme>
  `
});

app.component('myTemperature', {

  template: `
    <my-pdf-or-jpg
      pdf="client/pages/tech/projects/temperature/img/temperature.pdf#!page=1"
      jpg="client/pages/tech/projects/temperature/img/temperature.jpg">
    </my-pdf-or-jpg>
  `
});

app.component("myWebsite", {

  template: `
    <my-readme
      owner="n02870941"
      repo="personal_site"
    >
    </my-readme>
  `
});

app.controller('ecuadorController', function($scope) {

  $scope.toggleLanguage = function() {
    $scope.spanish = !$scope.spanish;

    if ($scope.spanish) {
      $("#toggle-button").html('View in English');

    } else {

      $("#toggle-button").html('Ver en Español');
    }
  }

//------------------------------------------------------------------------------

  function init() {
    $scope.spanish = true;
    $scope.toggleLanguage();
  }

  init();

});

app.component('part1', {

  css: "client/pages/projects/projects/mlt/part1/part1.css",

  templateUrl: "/client/pages/projects/projects/mlt/part1/templates/part1.template.html",

  controller: function() {
    // TO CONVERT PPTX TO PDF AND PRESERVE HYPER LINKS:
    // https://smallpdf.com/ppt-to-pdf

    this.jabari_resumes = [
      {
        name: "Freshman Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_freshman_year.pdf'
      },
      {
        name: "Sophomore Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_sophomore_year.pdf'
      },
      {
        name: "Junior Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_junior_year.pdf'
      },
      {
        name: "Senior Year - Jabari",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/jabari_dash_resume_senior_year.pdf'
      }
    ];

    this.kadeen_resumes = [
      {
        name: "Sophomore Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_sophomore_year.pdf'
      },
      {
        name: "Junior Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_junior_year.pdf'
      },
      {
        name: "Senior Year - Kadeen",
        href:'/client/pages/projects/projects/mlt/part1/downloads/resumes/kadeen_douglas_resume_senior_year.pdf'
      }
    ];

    this.$onInit = function() {

    }
  }

});

app.component('part2', {

  templateUrl: "/client/pages/projects/projects/mlt/part2/templates/part2.template.html"

});

app.component('part3', {

  templateUrl: "/client/pages/projects/projects/mlt/part3/templates/part3.template.html"

});

app.component('part4', {

  templateUrl: "/client/pages/projects/projects/mlt/part4/templates/part4.template.html"

});
