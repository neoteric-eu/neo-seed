define(['app'], function(module){
    "use strict";

    module.directive('languageSelector', function(Language){
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "app-demo/components/language/language-selector.tpl.html",
            scope: true
        }
    })
});
