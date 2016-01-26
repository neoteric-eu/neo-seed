define(['seed/components/module'], function (module) {
    'use strict';

    /**
     * Creates a Breadcrumbs line based on state data.title attribute
     * @class cookieConsent
     * @memberOf seed.components
     *
     * @return {{restrict: string, replace: boolean, templateUrl: string, scope: {}, link: Function}}
     * @param $cookies
     *              <cookie-consent></cookie-consent>
     */

    function cookieConsent($cookies) {
        return {
            restrict: 'E',
            templateUrl: 'seed/components/cookieConsent/cookieConsent.html',
            scope: {},
            controllerAs: 'vm',
            controller: function ($element) {
                var vm = this || {};

                vm.init = init;
                vm.acceptCookies = acceptCookies;

                vm.init();

                function init () {
                   if($cookies.getObject('cookieConsent')) {
                       $element.hide();
                   }
                }

                function acceptCookies () {
                    $cookies.putObject('cookieConsent', true);
                    $element.hide();
                }
            }
        };
    }

    module.directive('cookieConsent', cookieConsent);

});
