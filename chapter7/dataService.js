(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .service('dataService', ['$http', '$q', 'SESSIONS_URL', 'PRESENTERS_URL', function ($http, $q, SESSIONS_URL, PRESENTERS_URL) {
            return {
                getSessions: getSessions,
                getPresenters: getPresenters
            };

            function getSessions() {
                var deferred = $q.defer();

                $http.get(SESSIONS_URL)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function () {
                        console.log("Error while making call");
                        deferred.reject();
                    });
                return deferred.promise;
            };

            function getPresenters() {
                var deferred = $q.defer();

                $http.get(PRESENTERS_URL)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function () {
                        console.log("Error while making call");
                        deferred.reject();
                    });

                return deferred.promise;
            };
        }]);
}());