define(["../module"],function(a){"use strict";a.registerDirective("smartPageTitle",["$rootScope","$timeout",function(a,b){return{restrict:"A",compile:function(c,d){c.removeAttr("smart-page-title data-smart-page-title");var e=d.smartPageTitle,f=function(a,c){var d=e;c.data&&c.data.title&&(d=c.data.title+" | "+d),b(function(){$("html head title").text(d)})};a.$on("$stateChangeStart",f)}}}])});
