(function(){
    "use strict";

    angular.module("CodeCamp",['ngRoute'])
        .constant("SESSIONS_URL", "http://tekadept.com/codecamp/sessions")
        .constant("PRESENTERS_URL", "http://tekadept.com/codecamp/presenters")
        .run(function(){
            console.log("Hello from run ");
        })
        .filter('unsafe', function ($sce) {
            return function (val) {
                return $sce.trustAsHtml(val);
            };
        })
        .filter('jsonDate', function ($filter) {
            return function (input, format) {
                if(!input){return;}
                return $filter('date')(parseInt(input.substr(6)), format);
            };
        });
    ;
}());
