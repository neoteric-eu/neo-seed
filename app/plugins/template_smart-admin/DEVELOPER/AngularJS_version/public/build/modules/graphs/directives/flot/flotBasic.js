define(["../../module","flot","flot-resize","flot-fillbetween","flot-orderBar","flot-pie","flot-time","flot-tooltip"],function(a){"use strict";a.registerDirective("flotBasic",function(){return{restrict:"A",scope:{data:"=flotData",options:"=flotOptions"},link:function(a,b){var c=$.plot(b,a.data,a.options);a.$watchCollection("data",function(a,b){a!=b&&(c.setData(a),c.draw())})}}})});
