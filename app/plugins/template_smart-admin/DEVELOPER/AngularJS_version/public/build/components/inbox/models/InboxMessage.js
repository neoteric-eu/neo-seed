define(["../module","lodash"],function(a,b){"use strict";return a.registerFactory("InboxMessage",["$resource",function(a){var c=a("api/messages.json/:id",{id:"@_id"},{get:{url:"api/message.json",isArray:!1}});return b.extend(c.prototype,{selected:!1,hasAttachments:function(){return b.isArray(this.attachments)&&this.attachments.length},fullAttachmentsTootlip:function(){return"FILES: "+b.pluck(this.attachments,"name").join(", ")},getBodyTeaser:function(){var a=this.body.replace(/<[^<>]+?>/gm," ").replace(/(\s{2}|\n)/gm," "),b=55-this.subject.length;return a.length>b?a.substring(0,b)+"...":a}}),c}])});
