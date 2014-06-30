
(function() {
	'use strict';
	define([],function() {

		var documentService = function($q, documentResource) {
			var self = this;

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

			this.previewDocument = new ModelConstructor();
			this.activeDocument = new ModelConstructor();
			this.documents = new ModelConstructor();

			this.getDocumentById = function(id, version) {
				var deferred = $q.defer();

				documentResource.getDocumentById({documentId: id, version: version}, function(data) {
				// self.activeDocument.setModel(data);
				// self.previewDocument.setModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.getDocuments = function() {
				var deferred = $q.defer();

				documentResource.getDocuments(function(data) {
					self.documents.setModel(data.data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.createDocument = function(document) {
				var deferred = $q.defer();

				documentResource.createDocument(document, function(data) {
					deferred.resolve(data);
					self.documents.pushDataToModel(data);
					self.activeDocument.setModel(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.updateDocument = function(document) {
				var deferred = $q.defer();

				documentResource.updateDocument({documentId: document.id}, document, function(data) {
					self.activeDocument.setModel(data);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.removeDocument = function(document){
				var deferred = $q.defer();

				documentResource.removeDocument({documentId: document.id}, function(data) {
					self.documents.removeModel(document);
					deferred.resolve(data);
				}, function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

			this.restoreDocumentVersion = function(id, version) {
				var deferred = $q.defer();
				documentResource.updateDocument({documentId: id, version: version}, {}, function(data) {
					self.previewDocument.setModel(data);
					deferred.resolve(data);
				},function(reason) {
					deferred.reject(reason);
				});

				return deferred.promise;
			};

		};

		return ['$q', 'documentResource', documentService];

	});
}());
