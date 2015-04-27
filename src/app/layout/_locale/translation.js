define(['angular', 'app'], function (angular) {
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_GB', {"Dashboard":"Dashboard","Docs":"Docs","Documents":"Documents","Fields":"Fields","Sign Out":"Sign Out","Templates":"Templates"});
    gettextCatalog.setStrings('pl_PL', {"Dashboard":"Panel","Docs":"Docs","Documents":"Dokumenty","Fields":"Pola","Sign Out":"Wyloguj","Templates":"Szablony"});
/* jshint +W100 */
}]);
});