define(["../../module","jquery-ui"],function(a){"use strict";return a.registerDirective("smartDatepicker",function(){return{restrict:"A",compile:function(a,b){a.removeAttr("smartDatepicker");var c=[];b.minRestrict&&c.push(function(a){$(b.minRestrict).datepicker("option","minDate",a)}),b.maxRestrict&&c.push(function(a){$(b.maxRestrict).datepicker("option","maxDate",a)});var d={prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',onSelect:function(a){angular.forEach(c,function(b){b.call(this,a)})}};b.numberOfMonths&&(d.numberOfMonths=parseInt(b.numberOfMonths)),b.dateFormat&&(d.dateFormat=b.dateFormat),b.defaultDate&&(d.defaultDate=b.defaultDate),b.changeMonth&&(d.changeMonth="true"==b.changeMonth),a.datepicker(d)}}})});
