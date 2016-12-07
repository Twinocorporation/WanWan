// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


 

  // Page homefirst
  .state('homefirst', {
            url:'/homefirst',
            templateUrl: 'templates/homefirst.html',
            controller: 'HomeFirstCtrl'
  })
  
   // Page homeFaim
  .state('homeFaim', {
            url:'/homeFaim',
            templateUrl: 'templates/homeFaim.html',
            controller: 'HomeFaimCtrl'
  })
  
   // Page homeCuisine
  .state('homeCuisine', {
            url:'/homeCuisine',
            templateUrl: 'templates/homeCuisine.html',
            controller: 'HomeCuisineCtrl'
  })
  
   // Page geolocalisation
  .state('geolocalisation', {
            url:'/geolocalisation',
            templateUrl: 'templates/geolocalisation.html',
            controller: 'GeolocalisationCtrl'
  })
  
  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.commande', {
      url: '/commande',
      views: {
        'tab-commande': {
          templateUrl: 'templates/tab-commande.html',
          controller: 'CommandeCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/commande/:chatId',
      views: {
        'tab-commande': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.moment', {
    url: '/moment',
    views: {
      'tab-moment': {
        templateUrl: 'templates/tab-moment.html',
        controller: 'MomentCtrl'
      }
    }
  })
  
    .state('tab.account',{

url:'/account',

views: {

'tab-account': {

templateUrl : 'templates/tab-account.html',
controller :'AccountCtrl'

}
}

})


// setup an abstract state for the tabs directive
    .state('tabCuisine', {
    url: '/tabCuisine',
    abstract: true,
    templateUrl: 'templates/tabsCuisine.html'
  })

  // Each tab has its own nav history stack:

  .state('tabCuisine.dashCuisine', {
    url: '/dashCuisine',
    views: {
      'tabCuisine-dashCuisine': {
        templateUrl: 'templates/tabCuisine-dashCuisine.html',
        controller: 'DashCuisineCtrl'
      }
    }
  })

  .state('tabCuisine.commandeCuisine', {
      url: '/commandeCuisine',
      views: {
        'tabCuisine-commandeCuisine': {
          templateUrl: 'templates/tabCuisine-commandeCuisine.html',
          controller: 'CommandeCuisineCtrl'
        }
      }
    })
   

  .state('tabCuisine.momentCuisine', {
    url: '/momentCuisine',
    views: {
      'tabCuisine-momentCuisine': {
        templateUrl: 'templates/tabCuisine-momentCuisine.html',
        controller: 'MomentCuisineCtrl'
      }
    }
  })
  
    .state('tabCuisine.accountCuisine',{

url:'/accountCuisine',

views: {

'tabCuisine-accountCuisine': {

templateUrl : 'templates/tabCuisine-accountCuisine.html',
controller :'AccountCuisineCtrl'

}
}

});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/homefirst');

});
