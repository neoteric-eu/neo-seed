module.exports = function () {
  'use strict';

  return {
    build: {
      options: {
        baseUrl: 'src/',
        optimize: 'none',
        out: '<%= paths.build %>/module.js',
        generateSourceMaps: false,
        preserveLicenseComments: false,
        useStrict: true,
        mainConfigFile: 'src/seed/require.conf.js',
        findNestedDependencies: true,
        removeCombined: true,
        optimizeAllPluginResources: true,
        waitSeconds: 0,
        include: [
          'seed/module'
        ],
        paths: {
          'jquery': 'empty:',

          // Angular dependencies
          'angular': 'empty:',
          'angular-animate': 'empty:',
          'angular-ui-bootstrap': 'empty:',
          'angular-ui-bootstrap-tpls': 'empty:',
          'angular-cookies': 'empty:',
          'angular-gettext': 'empty:',
          'angular-loading-bar': 'empty:',
          'angular-moment': 'empty:',
          'angular-permission': 'empty:',
          'angular-restmod': 'empty:',
          'angular-restmod/debounced': 'empty:',
          'angular-restmod/dirty': 'empty:',
          'angular-restmod/find-many': 'empty:',
          'angular-restmod/nested-dirty': 'empty:',
          'angular-restmod/paged': 'empty:',
          'angular-restmod/preload': 'empty:',
          'angular-sanitize': 'empty:',
          'angular-ui-select': 'empty:',
          'angular-ui-router': 'empty:',
          'angular-table': 'empty:',

          // Bootstrap dependencies
          'bootstrap': 'empty:',

          // Smart Admin plugins
          'notification': 'empty:',

          // Other vendor
          'moment': 'empty:',
          'lodash': 'empty:',

          'raphael': 'empty:',

          'form-validation': 'empty:',
          'form-validation-bootstrap': 'empty:',
          'daterangepicker': 'empty:'
        }
      }
    }
  };
};
