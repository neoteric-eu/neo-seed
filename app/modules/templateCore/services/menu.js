(function() {
	'use strict';
	define([], function() {
		var menu = function(permissions, gettextCatalog){
			return {

				menu: [

					{ href: 'start', title: gettextCatalog.getString('Dashboard'), icon: 'fa fa-lg fa-fw fa-list-ul'},
					// { href: 'templates', title: 'Szablony', icon: 'fa fa-lg fa-fw fa-list-ul', accesss: 'SM_USER_GET'},

				],

				getMenu: function() {
					var menu = angular.copy(this.menu);
					return _.filter(menu, function(item) {
						return permissions.checkMenuAccess(item.access);
					});
				},
			};
		};
		return ['permissions', 'gettextCatalog', menu];
	});
}());
