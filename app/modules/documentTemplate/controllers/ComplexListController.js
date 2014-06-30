/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var ComplexListController = function($scope, $filter, $modal, $location,
			system, locale, appMessages, documentTemplateService,
			documentTemplateModulePath, ngTableParams) {

			$scope.ngTableBuilder = function(data) {
				return new ngTableParams({
					page: 1,
					count: 10,
					sorting: {
						timestamp: 'desc'
					}
				}, {
					total: data.length,
					getData: function($defer, params) {
						var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}
				});
			};

			$scope.getComplexFields = function() {
				system.showLoader();

				documentTemplateService.getFieldTypes().then(
					function() {
						$scope.complexFieldTypes = documentTemplateService.complexFieldTypes.getModel();
						console.log($scope.complexFieldTypes);
						$scope.complexTable = $scope.ngTableBuilder($scope.complexFieldTypes);
					}, function() {
						appMessages.error(locale.getT('Operation_failed'));
						// system.$exceptionHandler(reason);
					}

				).finally(function() {
					system.hideLoader();
				});
			};

			$scope.refreshComplexList = function() {
				$scope.complexFieldTypes = documentTemplateService.complexFieldTypes.getModel();
			};

			$scope.editComplex = function(complex) {
				$location.url('/complex/edit/' + complex.id);
			};

			$scope.removeComplexModal = function(complex) {
				var modalScope = $scope.$new();
				modalScope.complex = complex;

				var modalInstance = $modal.open({
					templateUrl: documentTemplateModulePath + 'views/modals/removeComplexFieldModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
					$scope.removeComplexField(complex);
				});
			};

			$scope.removeComplexField = function(complex) {
				system.showLoader();
				documentTemplateService.removeComplexField(complex).then(
					function() {
						$scope.complexTable.reload();
						appMessages.success(locale.getT('Operation_succeeded'));
					}, function() {
						appMessages.error(locale.getT('Operation_failed'));
					}
				).finally(function() {
					system.hideLoader();
				});
			};



		};

		return ['$scope', '$filter', '$modal', '$location', 'system', 'locale',
		'appMessages', 'documentTemplateService', 'documentTemplateModulePath',
		'ngTableParams', ComplexListController];
	});
}());
