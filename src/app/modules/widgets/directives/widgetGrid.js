define(['modules/widgets/module'], function (module) {
	'use strict';

	module.directive('widgetGrid', function ($rootScope, $compile, $q, $state, $timeout, $log) {

		var jarvisWidgetsDefaults = {
			grid: 'article',
			widgets: '.jarviswidget',
			localStorage: true,
			deleteSettingsKey: '#deletesettingskey-options',
			settingsKeyLabel: 'Reset settings?',
			deletePositionKey: '#deletepositionkey-options',
			positionKeyLabel: 'Reset position?',
			sortable: true,
			buttonsHidden: false,
			// toggle button
			toggleButton: true,
			toggleClass: 'fa fa-minus | fa fa-plus',
			toggleSpeed: 200,
			/**
			 * Description
			 * @method onToggle
			 */
			onToggle: function () {
			},

			// delete btn
			deleteButton: true,
			deleteMsg: 'Warning: This action cannot be undone!',
			deleteClass: 'fa fa-times',
			deleteSpeed: 200,
			/**
			 * Description
			 * @method onDelete
			 */
			onDelete: function () {
			},

			// edit btn
			editButton: true,
			editPlaceholder: '.jarviswidget-editbox',
			editClass: 'fa fa-cog | fa fa-save',
			editSpeed: 200,
			/**
			 * Description
			 * @method onEdit
			 */
			onEdit: function () {
			},

			// color button
			colorButton: true,
			// full screen
			fullscreenButton: true,
			fullscreenClass: 'fa fa-expand | fa fa-compress',
			fullscreenDiff: 3,
			/**
			 * Description
			 * @method onFullscreen
			 */
			onFullscreen: function () {
			},

			// custom btn
			customButton: false,
			customClass: 'folder-10 | next-10',
			/**
			 * Description
			 * @method customStart
			 */
			customStart: function () {
				alert('Hello you, this is a custom button...');
			},
			/**
			 * Description
			 * @method customEnd
			 */
			customEnd: function () {
				alert('bye, till next time...');
			},

			// order
			buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
			opacity: 1.0,
			dragHandle: '> header',
			placeholderClass: 'jarviswidget-placeholder',
			indicator: true,
			indicatorTime: 600,
			ajax: true,
			timestampPlaceholder: '.jarviswidget-timestamp',
			timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
			refreshButton: true,
			refreshButtonClass: 'fa fa-refresh',
			labelError: 'Sorry but there was a error:',
			labelUpdated: 'Last Update:',
			labelRefresh: 'Refresh',
			labelDelete: 'Delete widget:',
			/**
			 * Description
			 * @method afterLoad
			 */
			afterLoad: function () {
			},
			rtl: false, // best not to toggle this!
			/**
			 * Description
			 * @method onChange
			 */
			onChange: function () {

			},
			/**
			 * Description
			 * @method onSave
			 */
			onSave: function () {

			},
			ajaxnav: true

		};

		var dispatchedWidgetIds = [];
		var setupWaiting = false;

		/**
		 * Description
		 * @method setupWidgets
		 * @param {} element
		 * @param {} widgetIds
		 */
		var setupWidgets = function (element, widgetIds) {

			if (!setupWaiting) {

				if (_.intersection(widgetIds, dispatchedWidgetIds).length !== widgetIds.length) {

					dispatchedWidgetIds = _.union(widgetIds, dispatchedWidgetIds);

					//element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
					element.jarvisWidgets(jarvisWidgetsDefaults);
					initDropdowns(widgetIds);
				}

			} else {
				if (!setupWaiting) {
					setupWaiting = true;
					$timeout(function () {
						setupWaiting = false;
						setupWidgets(element, widgetIds);
					}, 200);
				}
			}

		};

		/**
		 * Description
		 * @method destroyWidgets
		 * @param {} element
		 * @param {} widgetIds
		 */
		var destroyWidgets = function (element, widgetIds) {
			//element.data('jarvisWidgets') && element.data('jarvisWidgets').destroy();
			dispatchedWidgetIds = _.xor(dispatchedWidgetIds, widgetIds);
		};

		/**
		 * Description
		 * @method initDropdowns
		 * @param {} widgetIds
		 */
		var initDropdowns = function (widgetIds) {
			angular.forEach(widgetIds, function (wid) {
				$('#' + wid + ' [data-toggle="dropdown"]').each(function () {
					var $parent = $(this).parent();
					$(this).removeAttr('data-toggle');
					if (!$parent.attr('dropdown')) {
						$(this).removeAttr('href');
						$parent.attr('dropdown', '');
						var compiled = $compile($parent)($parent.scope());
						$parent.replaceWith(compiled);
					}
				});
			});
		};

		var jarvisWidgetAddedOff,
		    $viewContentLoadedOff,
		    $stateChangeStartOff;

		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} element
			 */
			compile: function (element) {

				element.removeAttr('widget-grid data-widget-grid');

				var widgetIds = [];

				$viewContentLoadedOff = $rootScope
					.$on('$viewContentLoaded', function () {
						$timeout(function () {
							setupWidgets(element, widgetIds);
						}, 100);
					});


				$stateChangeStartOff = $rootScope
					.$on('$stateChangeStart', function () {
						jarvisWidgetAddedOff();
						$viewContentLoadedOff();
						$stateChangeStartOff();
						destroyWidgets(element, widgetIds);
					});

				jarvisWidgetAddedOff = $rootScope
					.$on('jarvisWidgetAdded', function (event, widget) {
						if (widgetIds.indexOf(widget.attr('id')) === -1) {
							widgetIds.push(widget.attr('id'));
							$timeout(function () {
								setupWidgets(element, widgetIds);
							}, 100);
						}
						$log.debug('jarvisWidgetAdded');
					});

			}
		};
	});


});
