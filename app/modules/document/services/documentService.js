
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

			this.docs = new ModelConstructor();


			this.getDocuments = function() {
				var deferred = $q.defer();

				documentResource.getDocuments(
					function(data) {
						self.docs.setModel(data);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);

				return deferred.promise;
			};

			this.createDocument = function(doc) {
				var deferred = $q.defer();

				documentResource.createDocument(doc, function(data) {
						deferred.resolve(data);
						self.docs.pushDataToModel(data);
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
