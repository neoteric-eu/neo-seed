/* jshint unused: false, undef: false, quotmark:false */
/* global t:true */
var t = { pl: {}, en: {}};

define([
	'angular',
	'underscore',
	'angularResource',
	// 'sentryClient',
	// '../modules/global_settings',
	'../modules/miniCore/miniCoreModule',
	'../modules/formBuilder/formBuilderModule',
	'../modules/neoDocs/neoDocsModule',
	'../modules/document/documentModule',


],
function (angular) {
	'use strict';
	return angular.module('app', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ui.bootstrap',
		'xeditable',
		'ngTable',
		// 'sentryClient',

		'miniCore',
		'miniCore.controllers',
		'miniCore.directives',
		'miniCore.services',

		'formBuilder',
		'formBuilder.controllers',
		'formBuilder.directives',
		'formBuilder.services',

		// 'neoDocs',
		'neoDocs.controllers',
		'neoDocs.services',

		// 'document',
		'document',
		'document.controllers',
		'document.services'

	])

	.config(function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		// Keep track which HTML templates have already been modified.
		var modifiedTemplates = {};

		// Tests if there are any keep/omit attributes.
		var HAS_FLAGS_EXP = /data-(keep|omit)/;

		// Tests if the requested url is a html page.
		var IS_HTML_PAGE = /\.html$|\.html\?/i;


		var interceptor = ['$rootScope', '$q', function(scope, $q) {

			function success(response) {
				return response;
			}

			function error(response) {
				var status = response.status;

				if (status === 401) {
					var deferred = $q.defer();
					var req = {
						config: response.config,
						deferred: deferred
					};
					scope.$broadcast('event:loginRequired');
					return deferred.promise;
				}
				// otherwise
				return $q.reject(response);

			}

			return function(promise) {
				return promise.then(success, error);
			};

		}];

		$httpProvider.responseInterceptors.push(interceptor);

		$httpProvider.interceptors.push([
			'$q', '$templateCache', 'permissions',
			function($q, $templateCache, permissions) {

				return {
					'request': function(request) {
						if(permissions.clearCache && IS_HTML_PAGE.test(request.url)) {
							_.each(modifiedTemplates, function(val, key, list) {
								$templateCache.remove(key);
							});
							modifiedTemplates = {};
						}
						return request || $q.when(request);
					},

					'requestError': function(reason) {
						return $q.reject(reason);
					},

					'response': function(response) {
						var url = response.config.url,
						responseData = response.data;
						// think about how to check if page was cached - customer switching
						// prevents simple checking in the if below like:
						// !modifiedTemplate[url]
						if (IS_HTML_PAGE.test(url) &&
							HAS_FLAGS_EXP.test(responseData)) {

						// Create a DOM fragment from the response HTML.
						var template = $('<div>').append(responseData);

							// Find and parse the keep/omit attributes in the view.
							template.find('[data-keep],[data-omit]').each(function() {
								var element = $(this),
								data = element.data(),
								keep = data.keep,
								features = keep || data.omit || '';

								// Check if the user has all of the specified features.
								var hasFeature = _.all(features.split(','), function(feature) {
									var f;
									if(enums.features.hasOwnProperty(feature)) {
										f = enums.features[feature];
									} else {
										throw new Error("feature doesn't exist in enums: " + feature);
									}
									return permissions.hasFeature(f);
								});

								if (features.length && ((keep && !hasFeature) || (!keep && hasFeature))) {
									element.remove();
								}
							});

							// Set the modified template.
							response.data = template.html();

							// Replace the template in the template cache, and mark the
							// template as modified.
							// console.log("caching :" + url);
							// can't make below to work correctly
							// $templateCache.put(url, response.data);
							// modifiedTemplates[url] = true;
						}

						return response || $q.when(response);
					},

					'responseError': function(reason) {
						return $q.reject(reason);
					}
				};
			}
		]);
	})
	.run(['$rootScope', '$location', 'session', 'template', 'permissions',
		'setDefaultsHeaders', 'appMessages', 'menu',
		function($rootScope, $location, session, template, permissions,
		setDefaultsHeaders, appMessages, menu) {

		setDefaultsHeaders.setContentType('application/json');
		$rootScope.appReady = false;

		/**
		 *	@name redirectMgr
		 *	@param {string} path
		 *	@decription
		 */
		$rootScope.redirectMgr = function(path){
			if ( session.logged.getModel() ) {
				switch (path) {
					case '/login':
						path = 'start';
						break;
					default:
						path = 'start';
				}
				$location.url(path);

			} else {
				$location.url('/login');
			}
		};

		/**
		 *	@name checkSession()
		 *
		 *	@description
		 */
		$rootScope.checkSession = function() {
			session.checkSession().then(
				function() {
					var path = $location.path();
					$rootScope.mainTemplate = template.get('main', 'logged');
					$rootScope.redirectMgr(path);
					$rootScope.initUserData();
				}, function() {
					$rootScope.mainTemplate = template.get('main', 'not-logged');
					$rootScope.redirectMgr();
				}
			).finally(function() {
				$rootScope.appReady = true;
			});

		};
		$rootScope.checkSession();

		$rootScope.menu = menu.getMenu();
		$rootScope.$on('event:loginRequired', function() {
			session.clearSession();
			$rootScope.checkSession();
		});

		$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, priorRoute) {
			if(permissions.clearCache) {
				permissions.clearCache = false;
			}

			if (session.logged.getModel()) {
				try {
					if(!permissions.checkRouteAccess(currentRoute)) {
						$location.path('401');
						session.set('prevRoute', null);
					}
				} catch (e) {
					$location.path('401');
					session.set('prevRoute', null);
					throw e;
				}

			}

			appMessages.apply();
		});
	}]);

/*	.run(['$rootScope', '$session', 'customerHelper', 'loginRegisterHelper', 'permissions' , '$route', '$location', '$AppMessages', '$enums', '$config', 'setDefaultsHeaders', '$exceptionHandler', 'editableOptions',
	function($rootScope, $session, customerHelper, loginRegisterHelper, permissions, $route, $location, $appMessages, $enums, $config, setDefaultsHeaders, $exceptionHandler, editableOptions) {
		$rootScope.appReady = false;
		// set default headers
		var applicationId = $config.get('SaaSApplicationID');
		setDefaultsHeaders.setContentType('application/json');
		setDefaultsHeaders.setApplicationId(applicationId);

		editableOptions.theme = 'bs3';

		$session.init();

		if($session.isLoginDataPresent) {
			setDefaultsHeaders.setAuthToken($session.getToken());
			setDefaultsHeaders.setCustomerId($session.getCurrentCustomerId());

			customerHelper.init();
			customerHelper.getCurrentCustomer().then(function(customer) {
				$session.currentCustomer(customer);
				loginRegisterHelper.getFeatures().then(function(data) {
					permissions.features = data.values;
					$rootScope.appReady = true;
					$session.setLogged(true);

				});
			}, function(reason) {
				$session.setLogged(false);
				// mark everything as not logged
				$session.clearSession();
				$rootScope.appReady = true;
				$exceptionHandler(reason);
			});
			// try request
		} else {
			$session.clearSession();
			$rootScope.appReady = true;
			// redirect to login screen;
		}

		// FIXME:
		// U = new Utilities();
		$session.loggedTime = $config.get('loggedTime');
		// $session.init(setUserData, permissions.init);
		// $.jqplot.config.enablePlugins = true;

		// $rootScope.$on('$includeContentLoaded', runCustomizer);
		// $rootScope.$on('$viewContentLoaded', runCustomizer);

		$rootScope.$on('event:loginRequired', function() {
			$session.clearSession();
			$rootScope.redirectToLogin();
			console.log('loginRequired');
		});

		$rootScope.$on('$locationChangeStart', function(event, nextRoute, currentRoute){
			var route = currentRoute.split('#');
			if(angular.isDefined(route[1])) {
				localStorage.setItem('prevRoute',route[1]);
			}
		});

		$rootScope.$on('$viewContentLoaded', function(event){
			pageSetUp();
		});

		$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, priorRoute) {
			if(permissions.clearCache) {
				permissions.clearCache = false;
			}
			if($session.isLogged()) {
				try {
					if(!permissions.checkRouteAccess(currentRoute)) {
						$location.path('401');
						$session.set('prevRoute', null);
					}
				} catch (e) {
					$location.path('401');
					$session.set('prevRoute', null);
					throw e;
				}

				$session.updateCookieTime();
			} else {
				var path = $location.path();

				if(path === '/activation' || path === '/activation/simplified') {
					return;
				}

				// if($rootScope.appReady) {
					// $location.path('/start');
				// }

				if (path.indexOf('get/') !== -1) {
					$location.path(path);
				} else {
					$location.path('/login');
				}
			}

			$appMessages.$apply();
		});
	}
	]);*/

});
