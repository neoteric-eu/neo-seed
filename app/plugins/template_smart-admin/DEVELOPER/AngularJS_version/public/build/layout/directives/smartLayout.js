define(["../module","lodash"],function(a,b){"use strict";a.registerDirective("smartLayout",["$rootScope","$timeout","$interval","$q","SmartCss",function(a,c,d,e){var f=!1,g=e.defer();g.promise.then(function(){f=!0});var h,i,j,k,l=$(window),m=($(document),$("html")),n=$("body");return function o(){h=$("#header"),i=$("#left-panel"),j=$("#ribbon"),k=$(".page-footer"),b.every([h,i,j,k],function(a){return angular.isNumber(a.height())})?g.resolve():c(o,100)}(),{priority:2014,restrict:"A",compile:function(e){function o(){var b=n.hasClass("menu-on-top")&&i.is(":visible")?i.height():0,c=!n.hasClass("menu-on-top")&&i.is(":visible")?i.width()+i.offset().left:0,d=$("#content"),e=d.outerWidth(!0)-d.width(),f=d.outerHeight(!0)-d.height();u=l.width()-c-e,v=l.height()-b-f-h.height()-j.height()-k.height(),w=z-u,x=y-v,(Math.abs(w)||Math.abs(x)||A)&&(a.$broadcast("$smartContentResize",{width:u,height:v,deltaX:w,deltaY:x}),z=u,y=v,A=!1)}function p(a){g.promise.then(function(){r(a)})}function q(){B=!1}function r(a){c(function(){B=!0},a)}function s(){n.toggleClass("mobile-view-activated",l.width()<979),l.width()<979&&n.removeClass("minified"),o()}function t(a){a.data&&a.data.htmlId?m.attr("id",a.data.htmlId):m.removeAttr("id")}e.removeAttr("smart-layout data-smart-layout");var u,v,w,x,y=0,z=0,A=!1,B=!1;d(function(){B&&s()},300);var C=b.debounce(function(){p(300)},300);p(10),a.$on("$stateChangeStart",function(a,b){t(b),q()});var D=1;a.$on("$viewContentLoading",function(){D++}),a.$on("$stateChangeSuccess",function(){A=!0}),a.$on("$viewContentLoaded",function(){D--,0==D&&f&&C()})}}}])});
