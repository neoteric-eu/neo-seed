/* jshint unused: false, undef: false, quotmark:false */
/* global t:true */
var t = { pl: {}, en: {}};

define([
	'angular',
	'underscore',
	'angularResource',
	// '../modules/global_settings',
	'../modules/miniCore/miniCoreModule',
	'../modules/templateCore/templateCoreModule'
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
		'sentryClient',

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

					var exception = new Error();
					exception.message = response.data;
					exception.method = response.config.method;
					exception.headers = response.config.headers;
					exception.url = response.config.url;
					exception.data = response.data;
					exception.status = response.status;

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
	}])
	.run(['$rootScope', '$location', '$route', 'session', 'template', 'permissions',
		'setDefaultsHeaders', 'appMessages', 'menu', 'locale', 'enums',
		function($rootScope, $location, $route, session, template, permissions,
		setDefaultsHeaders, appMessages, menu, locale, enums) {

		setDefaultsHeaders.setContentType('application/json');
		$rootScope.appReady = false;
		$rootScope.t = locale.getT;

		/**
		 *	@name redirectMgr
		 *	@param {string} path
		 */
		//FIXME: test it
		//TODO: change urls to the params
		$rootScope.redirectMgr = function(path){
			if ( session.logged.getModel() ) {

				if(path === '/login') {
					path = '/';
				}

				$location.url(path);

			} else if ($location.url() !== '/login') {
				$location.url('/login');
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
			$route.reload();
		};

		/**
		 *	@name checkSession
		 *
		 */
		$rootScope.checkSession = function() {
			session.checkSession().then(
				function() {
					var path = localStorage.getItem('prevRoute') || '/';
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
				localStorage.setItem('prevRoute', route[1]);
			}

		});

		$rootScope.$on('$viewContentLoaded', function(event){
			pageSetUp();
		});

		$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
		/*	if(permissions.clearCache) {
				permissions.clearCache = false;
			}
			var onlyNotLogged;
			var isLogged = session.logged.getModel();
			var hasAccess = permissions.checkRouteAccess(nextRoute.$$route);

			if (angular.isDefined(nextRoute) && nextRoute.$$route.access) {
				onlyNotLogged = nextRoute.$$route.access === enums.features.ONLY_NOT_LOGGED;
			}

			console.log('hasAccess', hasAccess);


			if(!hasAccess && angular.isDefined(currentRoute)) {

				// $location.path(currentRoute.$$route.originalPath);

				if (isLogged) {
					$location.path('403');
				} else {
					$location.path('401');
				}

			}
*/

			// @example Logged user can't go to the '/login' page
			// if (!hasAccess && isLogged ) {
			// 	console.log('ONLY_NOT_LOGGED');
			// 	$location.path(currentRoute.$$route.originalPath);
			// 	return
			// }


		});

		$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {

			appMessages.$apply();
		});
	}]);

});
