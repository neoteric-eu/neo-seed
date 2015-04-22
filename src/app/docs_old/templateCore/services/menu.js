(function () {
	'use strict';
	define([], function () {
		var navMenu = function (locale, permissions) {
			return {

				menu: [
					{
						href: 'documents',
						title: 'Dokumenty',
						icon: 'fa fa-lg fa-fw fa-list-ul',
						access: 'ND_DOC_GET'
					},
					{
						href: 'templates',
						title: 'Szablony',
						icon: 'fa fa-lg fa-fw fa-edit',
						access: 'ND_DOC_TPL_GET'
					},
					{
						href: 'complex',
						title: 'Pola złożone',
						icon: 'fa fa-lg fa-fw fa-files-o',
						access: 'ND_DOC_TPL_GET'
					}
				],

				getMenu: function () {
					var menu = angular.copy(this.menu);
					return _.filter(menu, function (item) {
						return permissions.checkMenuAccess(item.access);
					});
				}
			};
		};
		return ['locale', 'permissions', navMenu];
	});
}());
