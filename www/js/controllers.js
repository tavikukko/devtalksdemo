angular.module('app.controllers', [])

    .controller('menuCtrl', function($scope, $location, $http) {

        $scope.imageUrl;
        $scope.displayableId;
        $scope.uniqueId;

        $scope.$on('$ionicView.enter', function() {

            $http({
                url: 'https://graph.microsoft.com/v1.0/me/photo/$value',
                method: 'GET',
                responseType: 'blob'
            }).success(function(image) {
                var url = window.URL || window.webkitURL;
                var blobUrl = url.createObjectURL(image);
                $scope.imageUrl = blobUrl;
            }).error(function(error) {
                alert(JSON.stringify(error));
            });

            ionic.Platform.ready(function() {
                var context = new Microsoft.ADAL.AuthenticationContext(authority);
                context.tokenCache.readItems().then(function(items) {

                    if (items.length > 0) {
                        $scope.displayableId = items[0].userInfo.displayableId;
                        $scope.uniqueId = items[0].userInfo.uniqueId;
                    }
                });
            });

        });

        $scope.signout = function() {
            var context = new Microsoft.ADAL.AuthenticationContext(authority);
            context.tokenCache.clear().then(function() {
                $location.path('/page4');
                $scope.$apply();
            });
        };

    })

    .controller('messagesCtrl', function($scope, $http) {

        $scope.items;

        $scope.$on('$ionicView.enter', function() {
            $http.get('https://graph.microsoft.com/v1.0/me/messages?$top=50&$select=subject')
                .then(function(d) {
                    $scope.items = d.data.value;
                },
                function(error) {
                    alert(JSON.stringify(error));
                });
        });

    })

    .controller('filesCtrl', function($scope, $http) {

        $scope.items;

        $scope.$on('$ionicView.enter', function() {
            $http.get('https://graph.microsoft.com/v1.0/me/drive/root/children?$select=name')
                .then(function(d) {
                    $scope.items = d.data.value;
                },
                function(error) {
                    alert(JSON.stringify(error));
                });
        });

    })

    .controller('eventsCtrl', function($scope, $http) {

        $scope.items;

        $scope.$on('$ionicView.enter', function() {
            $http.get('https://graph.microsoft.com/v1.0/me/events?$top=50&$select=subject')
                .then(function(d) {
                    $scope.items = d.data.value;
                },
                function(error) {
                    alert(JSON.stringify(error));
                });
        });

    })

    .controller('signinCtrl', function($scope, $location) {

        $scope.signin = function() {

            var context = new Microsoft.ADAL.AuthenticationContext(authority);

            context.tokenCache.readItems().then(function(items) {
                if (items.length > 0) {
                    authority = items[0].authority;
                    context = new Microsoft.ADAL.AuthenticationContext(authority);
                }
                // Attempt to authorize user silently
                context.acquireTokenSilentAsync(graphApi, clientId)
                    .then(function(auth) {
                        $location.path('/side-menu21/page1');
                        $scope.$apply();
                    }, function() {
                        // We require user cridentials so triggers authentication dialog
                        context.acquireTokenAsync(graphApi, clientId, redirectUri)
                            .then(function(auth) {
                                $location.path('/side-menu21/page1');
                                $scope.$apply();
                            }, function(err) {
                                alert("Failed to authenticate: " + err);
                            });
                    });
            });
        };

    })
