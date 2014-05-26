
(function() {
	'use strict';
	define([],function() {

		var documentTemplateService = function($q, documentTemplateResource) {
			var self = this;

			/* jshint  quotmark: false */
			var mockedTemplateData = [
	{
		"id": "535e063f975ac384eb3a79f8",
		"templateId": "000000000000000000000000",
		"name": "foo",
		"description": "bar",
		"timestamp": "2014-04-28T07:41:51+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-04-28T07:41:51+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-04-28T07:41:51+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "535e06b6975ac384eb3a79fb",
		"templateId": "000000000000000000000000",
		"name": "Analiza wymagan SaasManager",
		"description": "bar",
		"timestamp": "2014-04-28T07:43:50+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-04-28T07:43:50+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-04-28T07:43:50+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "53749400975ac384eb3a79fc",
		"templateId": "000000000000000000000000",
		"name": "foo",
		"description": "bar",
		"timestamp": "2014-05-15T10:16:32+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-05-15T10:16:32+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-05-15T10:16:32+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "5374c44c975ac384eb3a79fd",
		"templateId": "000000000000000000000000",
		"name": "foo",
		"description": "bar",
		"timestamp": "2014-05-15T13:42:36+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-05-15T13:42:36+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-05-15T13:42:36+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "535e06b6975ac384eb3a79fb",
		"templateId": "000000000000000000000000",
		"name": "Analiza wymagan SaasManager",
		"description": "bar",
		"timestamp": "2014-04-28T07:43:50+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-04-28T07:43:50+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-04-28T07:43:50+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "53749400975ac384eb3a79fc",
		"templateId": "000000000000000000000000",
		"name": "foo",
		"description": "bar",
		"timestamp": "2014-05-15T10:16:32+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-05-15T10:16:32+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-05-15T10:16:32+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	},
	{
		"id": "5374c44c975ac384eb3a79fd",
		"templateId": "000000000000000000000000",
		"name": "foo",
		"description": "bar",
		"timestamp": "2014-05-15T13:42:36+00:00",
		"details": [
			{
				"version": 1,
				"timestamp": "2014-05-15T13:42:36+00:00"
			}
		],
		"metaFields": [],
		"metaFieldCounter": 0,
		"etag": 1,
		"fileRequests": [],
		"lastModification": "2014-05-15T13:42:36+00:00",
		"version": 1,
		"versionCounter": 2,
		"accesses": [],
		"labels": []
	}



];

			/* jshint  quotmark: false */
			function ModelConstructor()  {
				var model = [];
				return {
					getModel:  function() {
						return model;
					},
					pushDataToModel: function(data) {
						model.push(data);
					},
					setModel: function(data) {
						model = data;
					},
					removeModel: function(data) {
						var index = _.indexOf(model, data);
						if ( index > -1 ) {
							model.splice(index, 1);
						}
					}
				};
			}

			this.documentTemplates = new ModelConstructor();


			this.getTemplates = function() {
				var deferred = $q.defer();
/*				documentTemplateResource.getTemplates(
					function(data) {
				console.log("start");
						self.documentTemplates.setModel(data);
						deferred.resolve(data);
						console.log('data', data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);*/

				self.documentTemplates.setModel(mockedTemplateData);
				deferred.resolve(mockedTemplateData);

				return deferred.promise;
			};

			this.getTemplateById = function(id) {
				var deferred = $q.defer();
				documentTemplateResource.getTemplateById({templateId: id}, function(data) {
					deferred.resolve(data);
				},function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.createTemplate = function(template) { // zamienić argument na templateId. caly obiekt nie jest potrzbny
				var deferred = $q.defer();
				documentTemplateResource.createTemplate(template, function(data) {
					self.documentTemplates.pushDataToModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.updateTemplate = function(template) {
				var deferred = $q.defer();
				documentTemplateResource.updateTemplate({templateId: template.id}, function (data) {
					deferred.resolve(data);
				}, function(reason){
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.removeTemplate = function(template) {
				var deferred = $q.defer();
				
				documentTemplateResource.removeTemplate({templateId: template.id}, function(data) {
					self.documentTemplates.removeModel(template);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

		};


		return ['$q', 'documentTemplateResource', documentTemplateService];

	});
}());
