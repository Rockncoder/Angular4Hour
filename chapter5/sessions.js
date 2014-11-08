(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("SessionsCtrl", ['dataService', function (dataService) {
            var vm = this;
            vm.sessions = dataService.getSessions();
        }]);
}());