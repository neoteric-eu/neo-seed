(function() {
	'use strict';
	define([], function() {
		var menu = function(permissions, gettextCatalog){
			return {

				getMenu: function() {
					var menu = [
						{ href: 'start', title: gettextCatalog.getString('Dashboard'), icon: 'fa fa-lg fa-fw fa-list-ul'},
						// { href: 'templates', title: 'Szablony', icon: 'fa fa-lg fa-fw fa-list-ul', accesss: 'SM_USER_GET'},
					];

					return _.filter(menu, function(item) {
						return permissions.checkMenuAccess(item.access);
					});
				},
			};
		};
		return ['permissions', 'gettextCatalog', menu];
	});
}());
