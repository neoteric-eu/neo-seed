/* jshint quotmark:false, undef:false */
define([
	'angular',
	'globalSettings',
	'underscore',
	'angularResource',
	'angularGettext',

	'../modules/miniCore/miniCoreModule',
	'../modules/templateCore/templateCoreModule'
],
function (angular, globalSettings) {
	'use strict';
	return angular.module('app', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ui.bootstrap',
		'xeditable',
		'ngTable',
		'sentryClient',
		'gettext',

		'miniCore',
		'miniCore.controllers',
		'miniCore.directives',
		'miniCore.services',

		'templateCore',
		'templateCore.services',
		'templateCore.directives'
	])

	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		// Keep track which HTML templates have already been modified.
		var modifiedTemplates = {};

		// Tests if there are any keep/omit attributes.
		var HAS_FLAGS_EXP = /data-(keep|omit)/;

		// Tests if the requested url is a html page.
		var IS_HTML_PAGE = /\.html$|\.html\?/i;


		var interceptor = ['$rootScope', '$q', '$exceptionHandler',
		function(scope, $q, $exceptionHandler) {

			function success(response) {
				return response;
			}

			function error(response) {
				var deferred = $q.defer();
				deferred.reject(response);

				if (response.status === 401) {
					scope.$broadcast('event:loginRequired');
				} else {

					// var exception = new Error();
					var exception = {
						message: response.data,
						method: response.config.method,
						headers: response.config.header,
						url: response.config.url,
						data: response.data,
						status: response.status
					};

					$exceptionHandler(exception);
				}

				return deferred.promise;

			}

			return function(promise) {
				return promise.then(success, error);
			};

		}];

		$httpProvider.responseInterceptors.push(interceptor);

		$httpProvider.interceptors.push([
			'$q', '$templateCache', 'permissions', 'enums',
			function($q, $templateCache, permissions, enums) {

				return {
					'request': function(request) {
						if(permissions.clearCache && IS_HTML_PAGE.test(request.url)) {
							_.each(modifiedTemplates, function(val, key) {
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
	}])
	.run(['$rootScope', '$location', '$route', '$cookieStore', 'session',
		'permissions', 'setDefaultsHeaders', 'appMessages', 'menu', 'enums',
		'editableOptions', 'gettextCatalog', 'gettext', 'template',
		function($rootScope, $location, $route, $cookieStore, session,
		permissions, setDefaultsHeaders, appMessages, menu, enums,
		editableOptions, gettextCatalog, gettext, template) {

		editableOptions.theme = 'bs3';

		setDefaultsHeaders.setContentType('application/json');
		$rootScope.appReady = false;

		// Constance
		$rootScope.APP_NAME = globalSettings.get('APP_NAME');
		$rootScope.DOMAIN = globalSettings.get('DOMAIN');
		$rootScope.EMAILS = angular.fromJson(globalSettings.get('EMAILS'));
		$rootScope.LANGUAGES = globalSettings.get('LANGUAGES');
		$rootScope.LOGIN_DATA = angular.fromJson(globalSettings.get('LOGIN_DATA'));

		// Locale
		var lang = $cookieStore.get('lang') || globalSettings.get('DEFAULT_LANGUAGE');
		session.setLocale(lang);

		// Get translation text
		gettext('Polish');
		gettext('English');



		/**
		 *	@name redirectMgr
		 *	@param {string} path
		 */
		// FIXED By Paprot & Czekaj Time: 22:05
		//

		$rootScope.redirectMgr = function(path) {

			var url, foundRoute;


			if (session.logged) {

				$location.url(path);

			} else {
				url = $route.current;
				if (url && url.originalPath) {
					foundRoute = _.find($route.routes, function(r) {
						return r.originalPath === url.originalPath && r.access === 'ONLY_NOT_LOGGED';
					});
					if (!foundRoute || url.originalPath === '/') {
						$location.url('/login');
					}
				}
			}

		};


		/**
		 *	@name initUserData
		 *
		 *	@description Setup user data to the $rootScope
		 */
		$rootScope.initUserData = function() {
			$rootScope.currentCustomer = session.currentCustomer.getModel();
			$rootScope.customers = session.userData.getModel().user.customers;
			$rootScope.user = session.userData.getModel().user;
			$rootScope.lang = session.locale.getModel();
			$route.reload();
		};

		/**
		 *	@name checkSession
		 *
		 */
		$rootScope.checkSession = function() {
			session.checkSession().then(
				function() {
					var path = localStorage.getItem('prevRoute') || $route.routes[null].redirectTo;
					$rootScope.mainTemplate = template.get('main', 'logged');

					$rootScope.redirectMgr(path);
					$rootScope.menu = menu.getMenu();
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


		$rootScope.$on('event:loginRequired', function() {
			session.clearSession();
			$rootScope.checkSession();
		});

		$rootScope.$on('$locationChangeStart', function(event, nextRoute, currentRoute){
			var route = currentRoute.split('#');
			if(angular.isDefined(route[1])) {
				localStorage.setItem('prevRoute',route[1]);
			}
		});

		$rootScope.$on('$viewContentLoaded', function(){
			pageSetUp();
		});


		function routeAccess(nextRoute, currentRoute) {
			// Application has not started yet
			if(angular.isUndefined(session.logged)) {
				return;
			}
			if(permissions.clearCache) {
				permissions.clearCache = false;
			}

			var hasAccess;
			var isLogged = session.logged;
			var redirectTo = angular.isDefined(currentRoute) && angular.isDefined(currentRoute.redirectTo) ? currentRoute.redirectTo : '/';
			if (angular.isDefined(nextRoute) && angular.isDefined(nextRoute.$$route)) {

				hasAccess = permissions.checkRouteAccess(nextRoute.$$route);

				// If Route has feature ac`cess 'ONLY_NOT_LOGGED' and user is logged
				if (isLogged && nextRoute.$$route.access === enums.features.ONLY_NOT_LOGGED) {
					return $location.path(redirectTo);
				}
			}

			if (!hasAccess) {
				if (isLogged) {
					$location.path(redirectTo);
				} else {
					$location.path('/login');
				}
			}
		}


		$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
			routeAccess(nextRoute, currentRoute);
		});


		$rootScope.$on('$routeChangeSuccess', function() {
			appMessages.$apply();
		});
	}]);
});
