define(["../module","lodash","jquery-ui"],function(a,b){"use strict";$.widget("ui.dialog",$.extend({},$.ui.dialog.prototype,{_title:function(a){a.html(this.options.title?this.options.title:"&#160;")}})),a.registerDirective("smartJquiDialog",function(){var a=["autoOpen","modal","width","resizable"],c={width:Math.min(.7*$(window).width(),600),autoOpen:!1,resizable:!1};return{restrict:"A",link:function(d,e){var f=e.find("[data-dialog-title]").remove().html(),g=b.clone(c);a.forEach(function(a){e.data(a)&&(g[a]=e.data(a))});var h=e.find("[data-dialog-buttons]").remove().find("button").map(function(a,b){return{"class":b.className,html:b.innerHTML,click:function(){$(b).data("action")&&d.$eval($(b).data("action")),e.dialog("close")}}});e.dialog(b.extend({title:f,buttons:h},g))}}})});
