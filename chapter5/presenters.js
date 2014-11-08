(function () {
    "use strict";

    angular.module("CodeCamp")
        .controller("PresentersCtrl", ['dataService', function (dataService) {
            var vm = this;
            vm.presenters = dataService.getPresenters();
        }]);
}());