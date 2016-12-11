angular.module('starter.controllers', ['ngCordova','firebase'])

// login: twinoapplication@gmail.com
// password: twino2016

        .controller('HomeFirstCtrl', function ($scope, $location) {

            $scope.faim = function () {

                $location.path('/homeFaim');

            }

            $scope.cuisine = function () {

                $location.path('/homeCuisine');

            }


        })


        .controller('HomeCuisineCtrl', function ($scope, $ionicModal, $ionicPopup, $location, $http) {


            var url = 'https://onemore-386b2.firebaseio.com/cuisinier.json';

            $ionicModal.fromTemplateUrl('templates/loginCuisine.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.loginModal = modal;
            });


            $ionicModal.fromTemplateUrl('templates/inscrireCuisine.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.inscrireModal = modal;
            });




            // sert à afficher la fenêtre d'alerte dans le cas où le mot de passe ou le username ne correspond pas
            $scope.showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '登录名或密码不对',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

                    $scope.loginModal.hide();
                });
            }

            // fonction qu'on appelle quand on appuit sur le bouton valider
            $scope.loginNew = function (loginData) {

                var entre = false;

                $http.get(url).success(function (data) {
                    angular.forEach(data, function (value, key) {
                        var email = value.email;
                        var password = value.password;

                        if (loginData.username.toString() === email.toString() && loginData.password.toString() === password.toString()) {
                            // si login bon, on  ferme la fenêtre de modal et on envoit la page principal
                            $scope.loginModal.hide();
                            $location.path('/tabCuisine/dashCuisine');
                            entre = true;
                        }
                    });

                    if (entre === false) {
                        //sinon on affiche la fenêtre d'alerte
                        $scope.showAlert();
                    }


                });




            }

            $scope.showAlertinscrire = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '您没有输入全部信息',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

                    $scope.inscrireModal.hide();
                });
            }

            $scope.showAlertinscrirePass = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '两个密码不匹配. 是否重试?',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

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
                } else if (inscrireData.password != inscrireData.Confirmpassword) {
                    $scope.showAlertinscrirePass();
                } else {


                    var postData = {
                        "email": inscrireData.email,
                        "name": inscrireData.username,
                        "password": inscrireData.password
                    };

                    $http.post(url, postData).success(function (data) {

                    });

                    $scope.inscrireModal.hide();
                    $location.path('/tabCuisine/dashCuisine');
                }

            }





        })

        .controller('HomeFaimCtrl', function ($scope, $ionicModal, $ionicPopup, $location, $http) {


            var url = 'https://onemore-386b2.firebaseio.com/client.json';

            $ionicModal.fromTemplateUrl('templates/loginFaim.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.loginModal = modal;
            });


            $ionicModal.fromTemplateUrl('templates/inscrireFaim.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.inscrireModal = modal;
            });




            // sert à afficher la fenêtre d'alerte dans le cas où le mot de passe ou le username ne correspond pas
            $scope.showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '登录名或密码不对',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

                    $scope.loginModal.hide();
                });
            }

            // fonction qu'on appelle quand on appuit sur le bouton valider
            $scope.loginNew = function (loginData) {
                var entre = false;

                $http.get(url).success(function (data) {
                    angular.forEach(data, function (value, key) {
                        var email = value.email;
                        var password = value.password;

                        if (loginData.username.toString() === email.toString() && loginData.password.toString() === password.toString()) {
                            // si login bon, on  ferme la fenêtre de modal et on envoit la page principal
                            $scope.loginModal.hide();
                            $location.path('/tab/dash');
                            entre = true;
                        }
                    });

                    if (entre === false) {
                        //sinon on affiche la fenêtre d'alerte
                        $scope.showAlert();
                    }
                });

            }

            $scope.showAlertinscrire = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '您没有输入全部信息',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

                    $scope.inscrireModal.hide();
                });
            }


            $scope.showAlertinscrirePass = function () {
                var alertPopup = $ionicPopup.alert({
                    title: '两个密码不匹配. 是否重试?',
                    template: '请重新输入'
                });

                alertPopup.then(function (res) {

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
                } else if (inscrireData.password != inscrireData.Confirmpassword) {
                    $scope.showAlertinscrirePass();
                } else {


                    var postData = {
                        "email": inscrireData.email,
                        "name": inscrireData.username,
                        "password": inscrireData.password
                    };

                    $http.post(url, postData).success(function (data) {

                    });

                    $scope.inscrireModal.hide();
                    $location.path('/tab/dash');
                }

            }





        })

        .controller('DashCtrl', function ($scope, $http) {

            var url = 'https://zailaiyiwan-a646a.firebaseio.com/items.json';

            $scope.items = getItems();

            $scope.addItem = function () {
                var name = prompt("Que devez-vous acheter?");
                if (name) {
                    var postData = {
                        "name": name
                    };
                    $http.post(url, postData).success(function (data) {
                        $scope.items = getItems();
                    });
                }
            };

            function getItems() {
                var items = [];
                $http.get(url).success(function (data) {
                    angular.forEach(data, function (value, key) {
                        var name = {name: value.name};
                        items.push(name);
                    });
                });

                return items;
            }


        })

        .controller('CommandeCtrl', function ($scope, Chats) {
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            };
        })

        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        })

        .controller('MomentCtrl', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        })



        .controller('AccountCtrl', function ($scope, $ionicPopup) {
            $scope.showPopup = function () {
                $scope.data = {};

                //popup perso
                var myPopup = $ionicPopup.show({
                    template: '<input type="password" ng-model="data.wifi">',
                    title: 'Saisir le mot de passse wifi',
                    scope: $scope,
                    buttons: [
                        {text: 'Annuler'},
                        {
                            text: '<b> Enregistrer</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!$scope.data.wifi) {
                                    // nautorise pas la fermeture si mot de passe n'est pas saisi
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        }
                    ]
                });

                myPopup.then(function (res) {
                    console.log('Saisi!', res);
                });

                $timeout(function () {
                    myPopup.close(); //fermeture popup 3 seconde
                }, 3000);
            };

            //popup de confirmation

            $scope.showConfirm = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Manger une glace',
                    template: 'Etes vous sur de manger glace?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        console.log('vous êtes sûr');
                    } else {
                        console.log('vous netes pas sur');
                    }
                });
            };

            // popup alerte

            $scope.showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'ne mangez pas ça!',
                    template: 'le gout semble bon'
                });

                alertPopup.then(function (res) {
                    console.log('Merci de ne pas avoir manger ça');
                });
            };

            $scope.info = {
                platform: ionic.Platform.platform(),
                version: ionic.Platform.version()
            };
        })


        .controller('DashCuisineCtrl', function ($scope) {})

        .controller('CommandeCuisineCtrl', function ($scope, $http) {

            var url = 'https://onemore-386b2.firebaseio.com/store.json';

            function getStore() {
                var stores = [];
                $http.get(url).success(function (data) {
                    angular.forEach(data, function (value, key) {
                        var nom = {nom: value.nom};
                        stores.push(nom);
                    });
                });

                return stores;
            }

            $scope.stores = getStore();
            
            $scope.supprimer = function(nom){
                
            };
        })



        .controller('MomentCuisineCtrl', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        })
        
         .controller('MomentCuisineCtrl', function ($scope) {
            $scope.signupEmail = function(data){  
 
firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
 
};
           
        })



        .controller('AccountCuisineCtrl', function ($scope, $ionicPopup, $location) {
            $scope.createStore = function () {
                $location.path('/createStore');
            }

        })

        .controller('createStoreCtrl', function ($scope, $ionicPopup, $location, $http) {

            var url = 'https://onemore-386b2.firebaseio.com/store.json';

            $scope.retour = function () {
                $location.path('/tabCuisine/accountCuisine');
            };

            $scope.showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur!',
                    template: 'Compléter toutes les informations'
                });


            };

            $scope.showAlertExiste = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur!',
                    template: 'Ce magasin existe déjà'
                });


            };
            
            $scope.createSto = function (existe, createData) {

                if (existe == false) {
                    $scope.showAlertExiste();
                } else {
                    var postData = {
                        "nom": createData.nom,
                        "adresse": createData.adresse,
                        "telephone": createData.telephone
                    };

                    $http.post(url, postData).success(function (data) {

                        $location.path('/tabCuisine/accountCuisine');
                    });
                }
            }

            $scope.create = function (createData) {

                var nom = "";
                var existe = true;
                if (createData.nom != null && createData.telephone != null && createData.adresse != null) {
                    
                    $http.get(url).success(function (data) {

                        angular.forEach(data, function (value, key) {
                            nom = value.nom;
                            if (createData.nom.toString() === nom.toString()) {
                                console.log("dedans");
                                existe = false;
                            } 
                                
                        });
                        
                        $scope.createSto(existe,createData);
                        
                    });
                    
               

                } else {
                    $scope.showAlert();

                }
            };



        })


// http://www.joshmorony.com/integrating-google-maps-with-an-ionic-application/
// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple

        .controller('GeolocalisationCtrl', function ($scope, $cordovaGeolocation) {
            var posOptions = {timeout: 10000, enableHighAccuracy: true};
            $cordovaGeolocation
                    .getCurrentPosition(posOptions)

                    .then(function (position) {
                        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


                        var mapOptions = {
                            center: latLng,
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };

                        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);


                        //Wait until the map is loaded
                        google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                animation: google.maps.Animation.DROP,
                                position: latLng
                            });

                            var geocoder = new google.maps.Geocoder;
                            var infowindow = new google.maps.InfoWindow;



                            google.maps.event.addListener(marker, 'click', function () {
                                geocodeLatLng(geocoder, $scope.map, infowindow, latLng, marker);
                            });

                            function geocodeLatLng(geocoder, map, infowindow, latlng, marker) {

                                geocoder.geocode({'location': latlng}, function (results, status) {
                                    if (status === google.maps.GeocoderStatus.OK) {
                                        if (results[1]) {
                                            infowindow.setContent(results[1].formatted_address);
                                            infowindow.open(map, marker);
                                        } else {
                                            window.alert('No results found');
                                        }
                                    } else {
                                        window.alert('Geocoder failed due to: ' + status);
                                    }
                                });
                            }

                        }, function (err) {
                            console.log(err);
                        });





                    });

        });

