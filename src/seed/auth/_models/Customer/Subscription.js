define(['seed/auth/module'], function (module) {
    'use strict';

    /**
     * @constructor
     * @implements {seed.BaseModel}
     * @memberOf seed.auth
     *
     * @param restmod {Object} Data model layer interface
     * @return {*|Model} Model instance
     */


    var Subscription = function (restmod) {
        return restmod
            .model('/subscriptions')
            .mix({
                expiryDate: {
                    serialize: 'Datetime'
                }
            });
    };

    module.factory('Subscription', Subscription);

});
