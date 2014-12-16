define(['app'], function (app) {

    "use strict";

    return app.factory('Todo', function ($resource) {


        return $resource('app-demo/api/todos.json', {'id': '@_id'});

    });


});
