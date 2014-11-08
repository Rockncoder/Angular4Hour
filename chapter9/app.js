(function(){
    "use strict";

    angular.module("CodeCamp",['ngRoute', 'angular-data.DSCacheFactory', 'ngAnimate'])
        .constant("SESSIONS_URL", "http://tekadept.com/codecamp/sessions")
        .constant("PRESENTERS_URL", "http://tekadept.com/codecamp/presenters")
        .run(function(DSCacheFactory){
            console.log("Hello from run");

            DSCacheFactory("sessionsCache", {storageMode: "localStorage", maxAge: 10800000, deleteOnExpire: "aggressive"});
            DSCacheFactory("presentersCache", {storageMode: "localStorage", maxAge: 10800000, deleteOnExpire: "aggressive"});

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
