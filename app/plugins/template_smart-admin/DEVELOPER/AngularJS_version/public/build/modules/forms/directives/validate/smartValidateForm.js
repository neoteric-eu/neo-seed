define(["../../module","modules/forms/common","jquery-validation"],function(a){"use strict";return a.registerDirective("smartValidateForm",function(){return{restrict:"A",link:function(a,b){var c={rules:{},messages:{},highlight:function(a){$(a).closest(".form-group").removeClass("has-success").addClass("has-error")},unhighlight:function(a){$(a).closest(".form-group").removeClass("has-error").addClass("has-success")},errorElement:"span",errorClass:"help-block",errorPlacement:function(a,b){a.insertAfter(b.parent(".input-group").length?b.parent():b)}};b.find("[data-smart-validate-input], [smart-validate-input]").each(function(){var a=$(this),b=a.attr("name");c.rules[b]={},void 0!=a.data("required")&&(c.rules[b].required=!0),void 0!=a.data("email")&&(c.rules[b].email=!0),void 0!=a.data("maxlength")&&(c.rules[b].maxlength=a.data("maxlength")),void 0!=a.data("minlength")&&(c.rules[b].minlength=a.data("minlength")),a.data("message")?c.messages[b]=a.data("message"):angular.forEach(a.data(),function(a,d){if(0==d.search(/message/)){c.messages[b]||(c.messages[b]={});var e=d.toLowerCase().replace(/^message/,"");c.messages[b][e]=a}})}),b.validate(c)}}})});
