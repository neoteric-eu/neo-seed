define(["../module"],function(a){"use strict";a.registerController("LoginCtrl",["$scope","$state","GooglePlus","User","ezfb",function(a,b,c,d,e){a.$on("event:google-plus-signin-success",function(a,e){"PROMPT"==e.status.method&&c.getUser().then(function(a){d.username=a.name,d.picture=a.picture,b.go("app.dashboard")})}),a.$on("event:facebook-signin-success",function(){e.api("/me",function(a){d.username=a.name,d.picture="https://graph.facebook.com/"+a.id+"/picture",b.go("app.dashboard")})})}])});
