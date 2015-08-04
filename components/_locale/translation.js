define(['angular', 'seed/module'], function (angular) {
	angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
		/* jshint -W100 */
		gettextCatalog.setStrings('en_GB', {
			"Next": "Next",
			"Previous": "Previous",
			"Profiles": "Profiles",
			"Showing": "Showing",
			"entries paginated by": "entries paginated by",
			"items per page": "items per page",
			"of": "of",
			"to": "to"
		});
		gettextCatalog.setStrings('pl_PL', {
			"Next": "Następna",
			"Previous": "Poprzednia",
			"Profiles": "Profile",
			"Showing": "Wyświetlono",
			"entries": "elementów",
			"of": "z",
			"to": "do"
		});
		/* jshint +W100 */
	}]);
});
