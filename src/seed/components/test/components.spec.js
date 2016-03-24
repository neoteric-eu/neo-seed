define([
  'angular',
  'angular-mocks',
  'seed/components/_includes',
  'seed/components/module',
  'seed/helpers/_includes',
  'seed/helpers/module'
], function () {
  'use strict';

  beforeEach(function () {
    module('seed.components');
  });

  require(['seed/components/test/activities/neoActivities.spec']);
  require(['seed/components/test/breadcrumbs/bigBreadcrumbs.spec']);
  require(['seed/components/test/breadcrumbs/neoStateBreadcrumbs.spec']);
  require(['seed/components/test/cookieConsent/cookieConsent.spec']);
  require(['seed/components/test/customer/neoCustomerSwitcher.spec']);
  require(['seed/components/test/euLogotypes/neoEuLogotypes.spec']);
  require(['seed/components/test/messages/appMessages.spec']);
  require(['seed/components/test/navigation/neoNavigation.spec']);
  require(['seed/components/test/pageTitle/neoPageTitle.spec']);
  require(['seed/components/test/versionTag/neoVersionTag.spec']);
});