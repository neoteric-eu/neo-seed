define(['apps/demo/module'], function(app){
    "use strict";

    return app.directive('recentProjects', function(Project){
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "apps/demo/components/projects/recent-projects.tpl.html",
            scope: true,
            link: function(scope, element){

                Project.list.then(function(response){
                    scope.projects = response.data;

                });

                scope.clearProjects = function(){
                    scope.projects = [];
                }
            }
        }
    })
});
