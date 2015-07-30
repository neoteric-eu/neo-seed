define(['apps/demo/module'], function(app){
    "use strict";

    return app.factory('LanguageDemo', function($http){

		function getLanguage(key, callback) {

			$http.get('apps/demo/api/langs/' + key + '.json').success(function(data){

				callback(data);

			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}

		function getLanguages(callback) {

			$http.get('apps/demo/api/languages.json').success(function(data){

				callback(data);

			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}

		return {
			getLang: function(type, callback) {
				getLanguage(type, callback);
			},
			getLanguages:function(callback){
				getLanguages(callback);
			}
		}

    })
})
