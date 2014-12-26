define(['app'], function(app){
	'use strict';

	return app.directive('userProfiles', function(){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/profiles/user-profiles.html',
			scope: true,
			link: function(scope){

				scope.profile = [];

				/*Project.list.then(function(response){
				 scope.projects = response.data;

				 });

				 scope.clearProjects = function(){
				 scope.projects = [];
				 };*/
			}
		};
	});
});
