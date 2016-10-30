/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('wanwan')

.controller('wanwanCtrl',function($scope, $ionicModal) {
             // define create account view
     
  $ionicModal.fromTemplateUrl('templates/login.html', {
     scope: $scope,
     animation: 'slide-in-up'
  }).then(function(modal) {
      $scope.loginModal = modal;
  });
  
});