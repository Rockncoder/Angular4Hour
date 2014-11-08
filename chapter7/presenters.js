(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("PresentersCtrl", ['dataService', function (dataService) {
            var vm = this;

            dataService.getPresenters().then(function (data) {
                vm.presenters = data;
            });
        }]);
}());