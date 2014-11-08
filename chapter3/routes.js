(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/sessions', {
                    templateUrl: 'templates/sessions.html',
                    controller: 'SessionsCtrl',
                    controllerAs: 'sessions'
                })
                .when('/sessions/:sessionId', {
                    templateUrl: 'templates/session.html',
                    controller: 'SessionCtrl',
                    controllerAs: 'session'
                })
                .when('/presenters', {
                    templateUrl: 'templates/presenters.html',
                    controller: 'PresentersCtrl',
                    controllerAs: 'presenters'
                })
                .when('/presenters/:memberId', {
                    templateUrl: 'templates/presenter.html',
                    controller: 'PresenterCtrl',
                    controllerAs: 'presenter'
                })
                .otherwise({redirectTo: '/sessions'});
        }]);
}());