define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering single form field
	 * @class docsField
	 * @memberOf app.docs
	 *
	 * @param $http HTTP {Object} communication service
	 * @param $timeout {Function} Timeout service
	 * @param $compile {Function} Template compilation service
	 * @param $log {Object} Logging service
	 * @param $modal {Object} Bootstrap modal service
	 * @param AttachmentAPI {Object} API interface for server communication
	 * @return {{restrict: string, controllerAs: string, scope: {field: string, container: string},
	 *   link: Function, controller: Function}}
	 */
	function docsField($http, $timeout, $compile, $modal, $log, AttachmentAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			controllerAs: 'vm',
			scope: {
				field: '=',
				container: '='
			},

			link: function (scope, element) {
				if (!_.has(scope.field, '$templateUrl')) {
					// If field is composite skip linking
					$log.debug('Composite field without $templateUrl');
					return;
				}

				// Preload template of field
				$http
					.get(scope.field.$templateUrl.toString())
					.success(function (data) {
						element.html(data);
						$compile(element.contents())(scope);

						// Attach validation rules
						// Should be replaced with asyncApply
						$timeout(function () {
							$('#fieldTemplate')
								.data('formValidation')
								.addField(scope.field.$name, scope.field.validators.$encapsulateValidators());
						});

						$log.debug('Recompiled view with newly added field');
					})
					.error(function () {
						$log.error('Could not fetch filed template');
					});

				$log.debug('Called linking function');
			},

			controller: function ($scope) {
				var vm = this;

				// functions
				vm.deleteField = deleteField;
				vm.isCompositeElement = isCompositeElement;
				vm.openFieldPropertiesModal = openFieldPropertiesModal;
				vm.downloadAttachment = downloadAttachment;

				/**
				 * Checks if element has nested fields
				 * @return {boolean} Truthy value
				 */
				function isCompositeElement() {
					return !!$scope.container.composite.length;
				}


				function downloadAttachment(attachmentId) {
					AttachmentAPI
						.download(attachmentId)
						.then(function (attachment) {
							var anchor = $('.tempLinkAddress').first();
							var windowUrl = window.URL || window.webkitURL;
							var blob = new Blob([attachment], {type: 'text/plain'});
							var url = windowUrl.createObjectURL(blob);
							anchor.attr('href', url);
							anchor.attr('download', attachmentId);
							anchor.get(0).click();
							windowUrl.revokeObjectURL(url);
						});
				}

				/**
				 * Removes field from collection
				 */
				function deleteField() {
					$('#fieldTemplate').formValidation('removeField', $scope.field.$name);

					$scope.container.composite.$remove($scope.field);
					$scope.field.$destroy();

					$log.debug('Removed field form container');
				}

				/**
				 * Open modal with field properties
				 */
				function openFieldPropertiesModal() {
					// $scope.modalInstance is required workaround to access injected $modalInstance
					// functions (dismiss, close) inside directives
					$scope.modalInstance = $modal.open({
						template: '<docs-field-properties></docs-field-properties>',
						size: 'lg',
						scope: $scope
					});

					$log.debug('Opened modal with field properties');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsField', docsField);
});
