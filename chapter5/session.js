(function () {
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("SessionCtrl", ['dataService', '$routeParams', '$filter', function (dataService, $routeParams, $filter) {
            var vm = this;
            vm.sessionId = $routeParams.sessionId;
            vm.sessions = dataService.getSessions();
            vm.currentSession = $filter('filter')(vm.sessions, {SessionID: vm.sessionId})[0];
        }]);
}());