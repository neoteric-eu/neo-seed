define(['apps/demo/components/inbox/module'], function(module){

    "use strict";

    return module.factory('InboxConfig', function($http){
        return $http.get('apps/demo/api/inbox.json');
    })


});
