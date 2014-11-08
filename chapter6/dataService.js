(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .service('dataService', ['$http', 'SESSIONS_URL', 'PRESENTERS_URL', function ($http, SESSIONS_URL, PRESENTERS_URL) {

            return {
                getSessions: getSessions,
                getPresenters: getPresenters
            };

            function getSessions(callback) {
                $http.get(SESSIONS_URL)
                    .success(function (data) {
                        callback(data);
                    });
            };

            function getPresenters(callback) {
                $http.get(PRESENTERS_URL)
                    .success(function (data) {
                        callback(data);
                    });
            }
        }]);
}());