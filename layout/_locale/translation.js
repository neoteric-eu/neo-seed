define(['angular', 'seed/module'], function (angular) {
	angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
		/* jshint -W100 */
		gettextCatalog.setStrings('en_GB', {
			"Dashboard": "Dashboard",
			"Planner": "Planner",
			"Reporter": "Reporter",
			"Sign Out": "Sign Out",
			"Tasks": "Tasks",
			"Tracker": "Tracker"
		});
		gettextCatalog.setStrings('pl_PL', {
			"Dashboard": "Panel",
			"Planner": "Planer",
			"Reporter": "Raporter",
			"Sign Out": "Wyloguj",
			"Tasks": "Zadania",
			"Tracker": "Tracker"
		});
		/* jshint +W100 */
	}]);
});
