/**
 * Created by john on 8/15/15.
 */
'use strict';

angular.module('myubrApp', ['ngMaterial', 'ngAria', 'ui.router'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
         url: '/',
        views: {
          main_content: {
            templateUrl: './components/landing-main/landing-main.html'
          }
        }
      })
      .state('pics-app', {
        url: '/pics-app',
        views: {
          main_content: {
            templateUrl: './components/pics-app/pics-app.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }]);