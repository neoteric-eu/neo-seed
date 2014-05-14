(function() {
	'use strict';
	define([], function() {
		var menu = function(locale, permissions){
			return {

				menu: [
					{ href: 'start', title: locale.getT('Start'), icon: 'fa fa-lg fa-fw fa-home'},
					{ href: 'account', title: locale.getT('Your_account'), icon: 'fa fa-lg fa-fw fa-wrench'},
					{ href: 'invoice', title: 'Moje faktury', icon: 'fa fa-lg fa-fw fa-inbox', access: 'EF_INVOICE_GET' },
					{ href: 'invoice/shared', title: 'Udostępnione dla mnie', icon: 'fa-lg fa-fw glyphicon glyphicon-cloud', access: 'EF_INVOICE_SHARE' },
					// { href: 'invoice/accept', title: 'Oczekujące', icon: 'fa-lg fa-fw glyphicon glyphicon-log-in', access: 'EF_INVOICE_GET' },
					// { href: 'invoice/import', title: 'Importuj fakturę', icon: 'fa fa-lg fa-fw fa-upload' },
				],

				getMenu: function() {
					var menu = angular.copy(this.menu);
					return _.filter(menu, function(item) {
						return permissions.checkMenuAccess(item.access);
					});
				},
			}
		};
		return ['locale', 'permissions', $config];
	});
}());
