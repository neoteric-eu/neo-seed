define(["../../module","bootstrap-markdown"],function(a){"use strict";a.registerDirective("smartMarkdownEditor",function(){return{restrict:"A",compile:function(a,b){a.removeAttr("smart-markdown-editor data-smart-markdown-editor");var c={autofocus:!1,savable:!0,fullscreen:{enable:!1}};b.height&&(c.height=parseInt(b.height)),a.markdown(c)}}})});
