define(['angular', 'seed/module'], function (angular) {
	angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
		/* jshint -W100 */
		gettextCatalog.setStrings('en_GB', {
			"Are you sure you want to remove item?": "Are you sure you want to remove item?",
			"Confirmation": "Confirmation",
			"No": "No",
			"Yes": "Yes"
		});
		gettextCatalog.setStrings('pl_PL', {
			"Are you sure you want to remove item?": "Czy na pewno chcesz usunąć wybrany element?",
			"Confirmation": "Potwerdzenie",
			"No": "Nie",
			"Yes": "Tak"
		});
		/* jshint +W100 */
	}]);
});
