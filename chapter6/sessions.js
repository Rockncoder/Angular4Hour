(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("SessionsCtrl", ['dataService', function (dataService) {
            var vm = this;

            dataService.getSessions(function(data){
                vm.sessions = data;
            });
        }]);
}());