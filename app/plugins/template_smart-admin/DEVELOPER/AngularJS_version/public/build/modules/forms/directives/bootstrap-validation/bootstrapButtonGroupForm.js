define(["../../module","bootstrap-validator"],function(a){"use strict";a.registerDirective("bootstrapButtonGroupForm",function(){return{restrict:"E",replace:!0,templateUrl:"build/modules/forms/directives/bootstrap-validation/bootstrap-button-group-form.tpl.html",link:function(a,b){b.bootstrapValidator({excluded:":disabled",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{gender:{validators:{notEmpty:{message:"The gender is required"}}},"languages[]":{validators:{choice:{min:1,max:2,message:"Please choose 1 - 2 languages you can speak"}}}}})}}})});
