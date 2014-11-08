(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("SessionsCtrl", ['dataService', function (dataService) {
            var vm = this;

            dataService.getSessions().then(function(data) {
                vm.sessions = data;
            });
        }]);
}());