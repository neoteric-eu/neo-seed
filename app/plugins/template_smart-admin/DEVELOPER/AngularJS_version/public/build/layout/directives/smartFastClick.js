define(["../module","require","fastclick"],function(a,b){"use strict";a.registerDirective("smartFastClick",function(){var a=b("fastclick");return{restrict:"A",compile:function(b){b.removeAttr("smart-fast-click data-smart-fast-click"),a.attach(b),a.notNeeded()||b.addClass("needsclick")}}})});
