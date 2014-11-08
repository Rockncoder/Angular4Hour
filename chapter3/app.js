(function(){
    "use strict";

    angular.module("CodeCamp",['ngRoute'])
        .constant("SESSIONS_URL", "http://tekadept.com/codecamp/sessions")
        .constant("PRESENTERS_URL", "http://tekadept.com/codecamp/presenters")
        .run(function(){
            console.log("Hello from run ");
        })
    ;
}());
