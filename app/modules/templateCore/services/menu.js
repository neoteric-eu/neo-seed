(function() {
	'use strict';
	define([], function() {
		var menu = function(locale, permissions){
			return {

				menu: [

					{ href: 'start', title: 'Dashboard', icon: 'fa fa-lg fa-fw fa-list-ul'},
					// { href: 'templates', title: 'Szablony', icon: 'fa fa-lg fa-fw fa-list-ul'},

				],

				getMenu: function() {
					var menu = angular.copy(this.menu);
					return _.filter(menu, function(item) {
						return permissions.checkMenuAccess(item.access);
					});
				},
			};
		};
		return ['locale', 'permissions', menu];
	});
}());
