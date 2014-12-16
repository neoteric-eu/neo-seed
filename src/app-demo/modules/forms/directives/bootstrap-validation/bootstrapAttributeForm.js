define(['modules/forms/module','bootstrap-validator'], function(module){

    "use strict";


    module.registerDirective('bootstrapAttributeForm', function(){

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app-demo/modules/forms/directives/bootstrap-validation/bootstrap-attribute-form.tpl.html',
            link: function(scope, form){
                form.bootstrapValidator();


            }

        }



    })


});
