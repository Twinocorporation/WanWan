angular.module('starter.controllers', [])

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

.controller('AccountCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: false
  };
  
  $scope.list = [
        { id : 1, title: '第一个活动', icon: 'ion-speakerphone'},
        { id : 2, title: '第二个活动' , icon: 'ion-happy-outline'},
        { id : 3, title: '第三个活动' , icon: 'ion-bowtie'},
        { id : 4, title: '第四个活动', icon: 'ion-android-bus'},
        { id : 5, title: '第五个活动',  icon: 'ion-social-freebsd-devil'}
       
    ];
    
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope : $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.loginModal= modal; 
    });

    })

        .controller('TestCtrl', function($scope, $ionicPopup) {
            $scope.showPopup = function() {
                $scope.data = {};
                
                //popup perso
                var myPopup = $ionicPopup.show({
                    template: '<input type="password" ng-model="data.wifi">',
                    title: 'Saisir le mot de passse wifi',
                    scope: $scope, 
                    buttons: [
                        { text: 'Annuler'},
                        { 
                            text:'<b> Enregistrer</b>',
                            type : 'button-positive',
                            onTap: function(e) {
                                if(!$scope.data.wifi) {
                                    // nautorise pas la fermeture si mot de passe n'est pas saisi
                                    e.preventDefault();
                                }else {
                                    return $scope.data.wifi;
                                }
                            }
                        }
                    ]
                });
                
                myPopup.then(function(res) {
                    console.log('Saisi!',res);
                });
                
                $timeout(function() {
                    myPopup.close(); //fermeture popup 3 seconde
                }, 3000);
            };
            
            //popup de confirmation
            
            $scope.showConfirm = function(){
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Manger une glace',
                    template: 'Etes vous sur de manger glace?'
                });
                
                confirmPopup.then(function(res){
                    if (res) {
                        console.log('vous êtes sûr');
                    }else {
                        console.log('vous netes pas sur');
                    }
                });
            };
            
                    // popup alerte
                    
            $scope.showAlert = function() {
                var alertPopup = $ionicPopup.alert({
                    title: 'ne mangez pas ça!',
                    template: 'le gout semble bon'
                });
                
                alertPopup.then(function(res){
                    console.log('Merci de ne pas avoir manger ça');
                });
            };
            
            $scope.info = {
                platform: ionic.Platform.platform(),
                version : ionic.Platform.version()
            };
    });
    

