
(function(){
    "use strict";

    // this is the getter form of module, no dependencies included
    angular.module("CodeCamp")
        .controller("PresentersCtrl", ['dataService', function(dataService){
            var vm = this;
            vm.message = "Hello Presenters";
            vm.pageClass = "page-presenters";


            dataService.getPresenters().then(function(data) {
                vm.presenters = data;
            });
        }]);
}());