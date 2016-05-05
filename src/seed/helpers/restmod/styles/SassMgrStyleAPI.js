define([
    'lodash',
    'seed/helpers/module',
    'angular-restmod/preload',
    'angular-restmod/find-many'
], function (_ , app) {
    'use strict';
    
    function getUrlPrefix(appConf) {
        var url = appConf.environmentSettings.apiUrl, prefix, ver;
        prefix = _.get(appConf, 'generalSettings.seed.apiPrefix');
        if(!_.isEmpty(prefix)) {
            url += '/' + prefix;
        }
        ver = _.get(appConf, 'generalSettings.seed.apiVer');
        if(_.isNumber(ver)) {
            url += '/v' + ver;
        }
        return url;
    }

    /**
     * JSON:API standard data interpreter settings
     * @interface
     * @memberOf seed.helpers
     *
     * @param restmod {Object} Restmod service provider
     * @param appConf {Object} Application configuration
     * @param $httpParamSerializerJQLike {$httpParamSerializerJQLike}
     * @return {void|*|{$isAbstract, $$chain}|Function|Object}
     */
    function SassMgrStyleAPI(restmod, appConf, $httpParamSerializerJQLike) {
        return restmod.mixin({
            $hooks: {
                'before-request': function (request) {
                    request.paramSerializer = $httpParamSerializerJQLike;
                }
            },
            $config: {
                style: 'SassMgrStyleAPI',
                urlPrefix: getUrlPrefix(appConf)
            }
        });
    }

    app.factory('SassMgrStyleAPI', SassMgrStyleAPI);
});
