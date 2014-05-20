
(function() {
	'use strict';
	define([],function() {

		var documentService = function($q, documentResource) {
			var self = this;

			/* jshint  quotmark: false */
			var mockedData = [
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
	}
];
			function ModelConstructor(initModel)  {
				var model = initModel;	// Private varialble
				return {				// Public methods
					getModel:  function() {
						return model;
					},
					setModel: function(data) {
						model = data;
					},
					removeModel: function(data) {
						var index = _.indexOf(this.model, data);
						if ( index > -1 ) {
							this.model.splice(index, 1);
						}
					}
				};
			}

			this.docs = new ModelConstructor();


			this.getDocuments = function() {
				var deferred = $q.defer();

/*				documentResource.getDocuments(
					function(data) {
						self.docs.setModel(data);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);*/

				self.docs.setModel(mockedData);
				deferred.resolve(mockedData);

				return deferred.promise;
			};

			this.createDocument = function(doc) {
				var deferred = $q.defer();

				documentResource.createDocument(doc, function(data) {
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);
				return deferred.promise;
			};

			this.removeDocument = function(doc){
				var deferred = $q.defer();
				console.log('document service - usuwanie dokumentu...');
				documentResource.deleteDocument({documentId: doc.id},
					function(data) {
						self.docs.removeModel(doc);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);

				return deferred.promise;
			};




		};


		return ['$q', 'documentResource', documentService];

	});
}());
