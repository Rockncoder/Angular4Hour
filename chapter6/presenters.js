(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("PresentersCtrl", ['dataService', function (dataService) {
            var vm = this;

            dataService.getPresenters(function (data) {
                vm.presenters = data;
            });
        }]);
}());