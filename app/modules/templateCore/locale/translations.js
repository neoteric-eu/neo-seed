define(['angular', 'app'], function (angular) {
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('pl', {"error":"Błąd","success":"Gratulacje","warning":"Ostrzeżenie","ERROR":"Błąd","SUCCESS":"Gratulacje","WARNING":"Ostrzeżenie"});
    gettextCatalog.setStrings('pl', {"English":"Angielski","Polish":"Polski"});
/* jshint +W100 */
}]);
});