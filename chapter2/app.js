// NOTE: Using Immediately Invoke Function Expression to wrap everything up

(function(){
    "use strict";

    // note: No assignment here either, it is not necessary
    // this is the setter form of module, dependencies, even if none, included
    angular.module("CodeCamp",[])
        .constant("SESSIONS_URL", "http://tekadept.com/codecamp/sessions")
        .constant("PRESENTERS_URL", "http://tekadept.com/codecamp/presenters")
        .value("BAD_URL", "http://www.google.com")
        .provider("myService", function() {
            var provider = {};

            console.log("myService: Initialized");

            provider.$get = function() {
                var service = {};

                service.doService = function() {
                    console.log("myService: Service Done!");
                    return "hello";
                }

                return service;
            }

            return provider;
        })
        // if passing a provider to a config, must append the word "Provider"
        .config(function(TEKADEPT_URL, myServiceProvider, $provide){
            // Config always runs first
            // can only pass PROVIDERS and CONSTANTS here
            console.log("Hello from config " + TEKADEPT_URL+ " " );

            // we can use a decorator to change any provider except constants
            $provide.decorator('BAD_URL', function ($delegate) {
                return "http://www.microsoft.com";
            });

            // from the config I can change the provider, but not use it
            myServiceProvider.$get = function(){
                var service = {};

                service.doService = function() {
                    console.log("myService: Service DONE!");
                    return "hola";
                }

                return service;
            }
        })
        .run(function(BAD_URL, myService){
            // run always runs after config
            // can pass any provider type here and can use it
            console.log("Hello from run " + BAD_URL + " " + myService.doService());
        })
    ;
}());


// Swap the order of the config and run modules and the constant and value factories
// the order appearance in the file has no affect on the order they are called by ng

