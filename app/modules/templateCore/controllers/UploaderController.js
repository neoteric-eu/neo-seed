(function() {
	'use strict';
	define(['globalSettings'], function(globalSettings){

		var UploaderController = function($rootScope, $scope, $fileUploader) {


			// create a uploader with options
			$scope.uploader = $fileUploader.create({
				// to automatically update the html. Default: $rootScope
				scope: $scope,
				url: globalSettings.get('tempUrl') + 'documents/upload/',
				formData: [
					{ key: 'value' }
				],
				filters: [
					// first user filter
					function (item) {
						console.info('filter1', item);
						return true;
					}
				],
				autoUpload: true,
			});


			// FAQ #1
/*			var item = {
				file: {
					name: 'Previously uploaded file',
					size: 1e6
				},
				progress: 100,
				isUploaded: true,
				isSuccess: true
			};


			item.remove = function() {
				$scope.uploader.removeFromQueue(this);
			};
			$scope.uploader.queue.push(item);
			$scope.uploader.progress = 100;


			// ADDING FILTERS
			 // second user filter
			$scope.uploader.filters.push(function (item) {
				console.info('filter2', item);
				return true;
			});

			*/
			// REGISTER HANDLERS

			$scope.uploader.bind('afteraddingfile', function (event, item) {
				console.info('After adding a file', item);
			});

			$scope.uploader.bind('whenaddingfilefailed', function (event, item) {
				console.info('When adding a file failed', item);
			});

			$scope.uploader.bind('afteraddingall', function (event, items) {
				console.info('After adding all files', items);
			});

			$scope.uploader.bind('beforeupload', function (event, item) {
				console.info('Before upload', item);
			});

			$scope.uploader.bind('progress', function (event, item, progress) {
				console.info('Progress: ' + progress, item);
			});

			$scope.uploader.bind('success', function (event, xhr, item, response) {
				console.info('Success', xhr, item, response);
			});

			$scope.uploader.bind('cancel', function (event, xhr, item) {
				console.info('Cancel', xhr, item);
			});

			$scope.uploader.bind('error', function (event, xhr, item, response) {
				console.info('Error', xhr, item, response);
			});

			$scope.uploader.bind('complete', function (event, xhr, item, response) {
				console.info('Complete', xhr, item, response);
			});

			$scope.uploader.bind('progressall', function (event, progress) {
				console.info('Total progress: ' + progress);
			});

			$scope.uploader.bind('completeall', function (event, items) {
				console.info('Complete all', items);
			});









		};

		return ['$rootScope', '$scope', '$fileUploader', UploaderController];
	});
}());
