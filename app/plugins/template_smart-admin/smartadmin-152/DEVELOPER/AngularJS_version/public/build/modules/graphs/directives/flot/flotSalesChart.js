define(["modules/graphs/module","modules/graphs/directives/flot/FlotConfig","flot","flot-resize","flot-fillbetween","flot-orderBar","flot-pie","flot-time","flot-tooltip"],function(a,b){"use strict";return a.registerDirective("flotSalesChart",function(){return{restrict:"E",replace:!0,template:'<div class="chart"></div>',scope:{data:"="},link:function(a,c){$.plot(c,[a.data],{xaxis:{mode:"time",tickLength:5},series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.1},{opacity:.15}]}},shadowSize:0},selection:{mode:"x"},grid:{hoverable:!0,clickable:!0,tickColor:b.chartBorderColor,borderWidth:0,borderColor:b.chartBorderColor},tooltip:!0,tooltipOpts:{content:"Your sales for <b>%x</b> was <span>$%y</span>",dateFormat:"%y-%0m-%0d",defaultTheme:!1},colors:[b.chartSecond]})}}})});