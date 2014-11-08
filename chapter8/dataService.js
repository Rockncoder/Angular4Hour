(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .service('dataService', ['$http', '$q', 'SESSIONS_URL', 'PRESENTERS_URL', 'DSCacheFactory', function ($http, $q, SESSIONS_URL, PRESENTERS_URL, DSCacheFactory) {
            var sessionsCache = DSCacheFactory.get("sessionsCache"),
                presentersCache = DSCacheFactory.get("presentersCache");

            setOptions();

            return {
                getSessions: getSessions,
                getPresenters: getPresenters
            };

            function setOptions() {
                sessionsCache.setOptions({
                    onExpire: function (key, value) {
                        getSessions()
                            .then(function () {

                            }, function () {
                                sessionsCache.put(key, value);
                            });
                    }
                });

                presentersCache.setOptions({
                    onExpire: function (key, value) {
                        getSessions()
                            .then(function () {

                            }, function () {
                                presentersCache.put(key, value);
                            });
                    }
                });
            }

            function getSessions() {
                var deferred = $q.defer(),
                    cacheKey = "sessions",
                    sessionsData = sessionsCache.get(cacheKey);

                if (sessionsData) {
                    console.log("Sessions Cache Hit");
                    deferred.resolve(sessionsData);
                } else {

                    $http.get(SESSIONS_URL)
                        .success(function (data) {
                            console.log("Loading sessions from web");
                            sessionsCache.put(cacheKey, data);
                            deferred.resolve(data);
                        })
                        .error(function () {
                            console.log("Error while making call");
                            deferred.reject();
                        });
                }
                return deferred.promise;
            };

            function getPresenters() {
                var deferred = $q.defer(),
                    cacheKey = "presenters",
                    presentersData = presentersCache.get(cacheKey);

                if (presentersData) {
                    console.log("Presenters Cache Hit");
                    deferred.resolve(presentersData);
                } else {
                    $http.get(PRESENTERS_URL)
                        .success(function (data) {
                            console.log("Loading presenters from web");
                            presentersCache.put(cacheKey, data);
                            deferred.resolve(data);
                        })
                        .error(function () {
                            console.log("Error while making call");
                            deferred.reject();
                        });
                }
                return deferred.promise;
            };
        }]);
}());