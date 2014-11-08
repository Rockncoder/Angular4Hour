// NOTE: Using Immediately Invoke Function Expression to wrap everything up

(function(){
    "use strict";

    // note: No assignment here either, it is not necessary
    // this is the setter form of module, dependencies, even if none, included
    angular.module("CodeCamp",['ngRoute', 'ngAnimate', 'angular-data.DSCacheFactory'])
        .constant("TEKADEPT_URL", "http://tekadept.com/codecamp/sessions")
        .constant("SESSIONS_URL", "http://tekadept.com/codecamp/sessions")
        .constant("PRESENTERS_URL", "http://tekadept.com/codecamp/presenters")
        .value("BAD_URL", "http://www.google.com")
        .provider("mySecondService", function() {
            var provider = {};

            console.log("mySecondService: Initialized");

            provider.$get = function() {
                var service = {};

                service.doService = function() {
                    console.log("mySecondService: Service Done!");
                    return "hello";
                }

                return service;
            }

            return provider;
        })
        .config(function(TEKADEPT_URL, mySecondServiceProvider, $provide){
            // Config always runs first
            // can only pass PROVIDERS and CONSTANTS here
            console.log("Hello from config " + TEKADEPT_URL+ " " );

            //$provide.decorator('BAD_URL', function ($delegate) {
            //    return "http://www.microsoft.com";
            //});

            // from the config I can change the provider, but not use it
            mySecondServiceProvider.$get = function(){
                var service = {};

                service.doService = function() {
                    console.log("mySecondService: Service DONE!");
                    return "hola";
                }

                return service;
            }
        })
        .run(function(BAD_URL, mySecondService, DSCacheFactory){
            // run always runs after config
            // can pass any provider type here
            console.log("Hello from run " + BAD_URL + " " + mySecondService.doService());

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


// Swap the order of the config and run modules and the constant and value factories
// the order appearance in the file has no affect on the order they are called
