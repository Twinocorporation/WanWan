angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$ionicModal,$ionicPopup, $location) {
    
                
            
                 $ionicModal.fromTemplateUrl('templates/login.html', {
                    scope : $scope,
                    animation: 'slide-in-up'
                    }).then(function(modal) {
                    $scope.loginModal= modal; 
                    });
                     
                 
                 $ionicModal.fromTemplateUrl('templates/inscrire.html', {
                    scope : $scope,
                    animation: 'slide-in-up'
                    }).then(function(modal) {
                    $scope.inscrireModal= modal; 
                    });
                    
            
                
    
    // sert à afficher la fenêtre d'alerte dans le cas où le mot de passe ou le username ne correspond pas
    $scope.showAlert = function() {
                var alertPopup = $ionicPopup.alert({
                    title: '登录名或密码不对',
                    template: '请重新输入'
                });
                
                alertPopup.then(function(res){
                    
                    $scope.loginModal.hide();
                });
            }
    
    // fonction qu'on appelle quand on appuit sur le bouton valider
    $scope.loginNew = function (loginData){
       if (loginData.username === "qiwei" && loginData.password=== "huang") {
            // si login bon, on  ferme la fenêtre de modal et on envoit la page principal
            $scope.loginModal.hide();
            $location.path('/tab/dash');
        }else {
            //sinon on affiche la fenêtre d'alerte
            $scope.showAlert();
        }
        
    }
    
    $scope.showAlertinscrire =function (){
        var alertPopup = $ionicPopup.alert({
                    title: '您没有输入全部信息',
                    template: '请重新输入'
                });
                
                alertPopup.then(function(res){
                    
                    $scope.inscrireModal.hide();
                });
    }
    
    // fonction qui permet de s'inscrire
    $scope.inscrire = function (inscrireData) {
        
        console.log(inscrireData.value1);
        console.log(inscrireData.value2);
        console.log(inscrireData.email);
        
        if (inscrireData.email == null || inscrireData.password == null || inscrireData.username == null) {
            
            $scope.showAlertinscrire(); 
        }else if ( inscrireData.value1== null && inscrireData.value2==null){
            $scope.showAlertinscrire();
        }else {
            $scope.inscrireModal.hide();
            $location.path('/tab/dash');
        }
               
    }
    
    
    
    
    
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
