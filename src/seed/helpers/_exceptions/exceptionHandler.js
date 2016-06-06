define(['seed/helpers/module'], function (module) {
    'use strict';
    
    module.factory('$exceptionHandler', function($window) {
        return function(exception, cause) {
            if(cause) {
                exception.message += ' (caused by "' + cause + '")';
            }
            exception.requireType = 'angular';
            exception.level = 'ERROR';
            exception.requireModules = [cause];
            if(typeof $window.handleStackTrace === 'function') {
                $window.handleStackTrace(exception);
            }
        };
    });
});

