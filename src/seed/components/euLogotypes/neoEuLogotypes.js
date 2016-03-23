define(['seed/components/module'], function (module) {
  'use strict';

  function neoEuLogotypes($log) {
    $log = $log.getInstance('seed.components.neoEuLogotypes');
    $log.debug('Initiated directive');

    return {
      restrict: 'E',
      templateUrl: 'seed/components/euLogotypes/neoEuLogotypes.html'
    };
  }

  module.directive('neoEuLogotypes', neoEuLogotypes);
});
