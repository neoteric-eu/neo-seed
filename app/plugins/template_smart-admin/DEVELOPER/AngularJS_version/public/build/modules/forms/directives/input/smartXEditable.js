define(["../../module","x-editable"],function(a){"use strict";return a.registerDirective("smartXeditable",["$timeout","$log",function(){function a(a,b){var c={},d=function(){var d=a.options||{},e=angular.extend(c,d);b.editable("destroy"),b.editable(e)};a.$watch("options",function(a){return a?void d():!1},!0)}return{restrict:"A",require:"ngModel",scope:{options:"="},link:a}}])});
