	/* jshint unused: false, undef: false, quotmark:false */
var t;
t = { pl: {}, en: {}};

define( [
	'angular',
	'underscore',
	'angularResource',

	// Required for unit tests
	'../modules/miniCore/miniCoreModule',
	'../modules/templateCore/templateCoreModule',
	'../modules/documentTemplate/documentTemplateModule',
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
		'ui.sortable',
		'xeditable',
		'ngTable',
		// 'sentryClient',
		'angularFileUpload',

		'miniCore',
		'miniCore.controllers',
		'miniCore.directives',
		'miniCore.services',

		'templateCore',
		'templateCore.controllers',
		'templateCore.directives',
		'templateCore.services',

		'documentTemplate',
		'documentTemplate.controllers',
		'documentTemplate.directives',
		'documentTemplate.services',

		'document',
		'document.controllers',
		'document.services',
		'document.directives'

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
	})
	.run(['$rootScope', '$location', 'session', 'template', 'permissions',
		'setDefaultsHeaders', 'appMessages', 'menu', 'locale',
		function($rootScope, $location, session, template, permissions,
		setDefaultsHeaders, appMessages, menu, locale) {

		setDefaultsHeaders.setContentType('application/json');

		$rootScope.appReady = false;

		$rootScope.t = locale.getT;

		/**
		 *	@name redirectMgr
		 *	@param {string} path
		 */
		//FIXME: test it
		$rootScope.redirectMgr = function(path){
			if ( session.logged.getModel() ) {

				if(path === '/login') {
					path = '/start';
				}

				$location.url(path);

			} else if ($location.url() !== '/login') {
				$location.url('/login');
			}
		};

		$rootScope.initUserData = function() {
			$rootScope.currentCustomer = session.currentCustomer.getModel();
			$rootScope.customers = session.userData.getModel().user.customers;
			// $rootScope.isCurrentCustomer = session.isCurrentCustomer;
			$rootScope.user = session.userData.getModel().user;
		};

		/**
		 *	@name checkSession()
		 *
		 *	@description
		 */
		$rootScope.checkSession = function() {
			session.checkSession().then(
				function() {
					var path = localStorage.getItem('prevRoute') || '/start';
					$rootScope.mainTemplate = template.get('main', 'logged');
					$rootScope.redirectMgr(path);
					permissions.features = session.currentCustomer.getModel().featureKeys;
					$rootScope.initUserData();
					$rootScope.menu = menu.getMenu();
				}, function() {
					$rootScope.mainTemplate = template.get('main', 'not-logged');
					$rootScope.redirectMgr();
				}
			).finally(function() {
				$rootScope.appReady = true;
				$rootScope.initUserData();
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

			appMessages.$apply();
		});
	}]);

});
