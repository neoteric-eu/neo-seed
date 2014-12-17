define(['angular', 'app'], function (angular) {
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('pl', {"error":"Błąd","success":"Gratulacje","warning":"Ostrzeżenie","ERROR":"Błąd","SUCCESS":"Gratulacje","WARNING":"Ostrzeżenie"});
    gettextCatalog.setStrings('pl', {"English":"Angielski","Polish":"Polski"});
    gettextCatalog.setStrings('pl', {"Available profiles":"Dostępne profile","Cancel":"Anuluj","Contact support":"Skontaktuj się z obsługą","Dashboard":"Start","Email":"Email","Enter your email address.":"Podaj swój adres email","Enter your password.":"Podaj hasło","Forgot password?":"Zaponiałeś hasła?","Log in":"Zaloguj się","Login as":"Zaloguj się jako","Logout":"Wyloguj","Password":"Hasło","Select":"Wybierz","Select customer to login":"Wybierz profil do zalogowania","Wrong e-mail or password.":"Nieprawidłowy e-mail bądź hasło.","question":"pytanie","Account admin":"Admin","Account user":"User"});
/* jshint +W100 */
}]);
});