angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.messages', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu.files', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/files.html',
        controller: 'filesCtrl'
      }
    }
  })

  .state('menu.events', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('signin', {
    url: '/page4',
    templateUrl: 'templates/signin.html',
    controller: 'signinCtrl'
  })

$urlRouterProvider.otherwise('/page4')

  

});