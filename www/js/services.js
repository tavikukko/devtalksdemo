angular.module('app.services', [])

    .factory('BlankFactory', [function() {

    }])

    .service('BlankService', [function() {

    }])

    .factory('tokenInterceptor', ['$q', function($q) {
        var interceptor = {
            request: function(config) {
                var deferred = $q.defer();

                // catch only outgoing traffic
                if (config.url.toLowerCase().lastIndexOf('http', 0) === 0) {
                    ionic.Platform.ready(function() {

                        var context = new Microsoft.ADAL.AuthenticationContext(authority);
                        context.tokenCache.readItems().then(function(items) {

                            if (items.length > 0) {

                                authority = items[0].authority;
                                context = new Microsoft.ADAL.AuthenticationContext(authority);

                                context.acquireTokenSilentAsync(graphApi, clientId)
                                    .then(function(auth) {
                                        config.headers.authorization = 'Bearer ' + auth.accessToken;
                                        deferred.resolve(config);
                                    }, function(error) {
                                        alert(JSON.stringify(error));
                                    });

                            } else deferred.resolve(config);
                        });

                    });

                } else deferred.resolve(config);

                return deferred.promise;
            }
        };
        return interceptor;
    }])

    .config(function($httpProvider) {
        $httpProvider.interceptors.push('tokenInterceptor');
    })

    ;

