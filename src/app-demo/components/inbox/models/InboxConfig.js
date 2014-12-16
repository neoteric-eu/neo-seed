define(['components/inbox/module'], function(module){

    "use strict";

    return module.factory('InboxConfig', function($http){
        return $http.get('app-demo/api/inbox.json');
    })


});
