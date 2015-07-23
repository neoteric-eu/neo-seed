define(['angular', 'seed/module'], function (angular) {
	angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
		/* jshint -W100 */
		gettextCatalog.setStrings('en_GB', {
			"Back": "Back",
			"Click here": "Click here",
			"Email": "Email",
			"Forgot password?": "Forgot password?",
			"Log in": "Log in",
			"Logged as someone else?": "Logged as someone else?",
			"Login as": "Login as",
			"Password": "Password",
			"Please log in": "Please log in",
			"Select": "Select",
			"Select profile": "Select profile",
			"Unlock": "Unlock",
			"Welcome!": "Welcome!",
			"Wrong e-mail or password.": "Wrong e-mail or password.",
			"to continue": "to continue"
		});
		gettextCatalog.setStrings('pl_PL', {
			"Back": "Wróć",
			"Click here": "Kliknij tutaj",
			"Email": "Email",
			"Forgot password?": "Zapomniałeś hasła?",
			"Log in": "Zaloguj",
			"Logged as someone else?": "Zalogowany jako inny użtkowanik?",
			"Login as": "Zaloguj jako",
			"Password": "Hasło",
			"Please log in": "Zaloguj się",
			"Select": "Wybierz",
			"Select profile": "Wybierz profil",
			"Unlock": "Odblokuj",
			"Welcome!": "Witaj!",
			"Wrong e-mail or password.": "Błędny adres e-mail lub hasło.",
			"to continue": "aby kontynuować"
		});
		/* jshint +W100 */
	}]);
});
