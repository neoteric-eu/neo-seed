(function() {
	'use strict';
	define([], function() {
		var navMenu = function(locale, permissions){
			return {

				menu: [
					{ href: 'document/create', title: 'Utwórz nowy dokument', icon: 'fa fa-lg fa-fw fa-file-o' },

					{ href: 'template/create', title: 'Utwórz nowy szablon', icon: 'fa fa-lg fa-fw fa-pencil-square-o'},

					{ href: 'document/document-list', title: 'Lista Dokumentów', icon: 'fa fa-lg fa-fw fa-list-ul' },

					{ href: 'template/template-list', title: 'Lista Szablonów', icon: 'fa fa-lg fa-fw fa-list-ul' },

					{ href: 'upload', title: 'upload', icon: 'fa fa-lg fa-fw fa-upload' }
				],

				getMenu: function() {
					var menu = angular.copy(this.menu);
					return _.filter(menu, function(item) {
						return permissions.checkMenuAccess(item.access);
					});
				},
			};
		};
		return ['locale', 'permissions', navMenu];
	});
}());
