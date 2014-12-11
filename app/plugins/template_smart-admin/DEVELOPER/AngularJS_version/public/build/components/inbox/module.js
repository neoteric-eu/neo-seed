define(["angular","angular-couch-potato","lodash","angular-ui-router","angular-resource"],function(a,b,c){"use strict";var d=a.module("app.inbox",["ui.router","ngResource"]);return b.configureApp(d),d.config(["$stateProvider","$couchPotatoProvider",function(a,b){a.state("app.inbox",{url:"/inbox",data:{title:"Inbox"},views:{content:{templateUrl:"build/components/inbox/views/inbox-layout.html",controller:["$scope","config",function(a,b){a.config=b.data,a.deleteSelected=function(){a.$broadcast("$inboxDeleteMessages")}}],controllerAs:"inboxCtrl",resolve:{deps:b.resolveDependencies(["components/inbox/directives/messageLabels"]),config:["InboxConfig",function(a){return a}]}}}}).state("app.inbox.folder",{url:"/:folder",views:{inbox:{templateUrl:"build/components/inbox/views/inbox-folder.html",controller:["$scope","messages","$stateParams",function(a,b,d){a.$parent.selectedFolder=c.find(a.$parent.config.folders,{key:d.folder}),a.messages=b,a.$on("$inboxDeleteMessages",function(){angular.forEach(a.messages,function(b,c){b.selected&&b.$delete(function(){a.messages.splice(c,1)})})})}],resolve:{messages:["InboxMessage","$stateParams",function(a,b){return a.query({folder:b.folder})}]}}}}).state("app.inbox.folder.detail",{url:"/detail/:message",views:{"inbox@app.inbox":{templateUrl:"build/components/inbox/views/inbox-detail.html",controller:["$scope","message",function(a,b){a.message=b}],resolve:{message:["InboxMessage","$stateParams",function(a,b){return a.get({id:b.message})}]}}}}).state("app.inbox.folder.replay",{url:"/replay/:message",views:{"inbox@app.inbox":{templateUrl:"build/components/inbox/views/inbox-replay.html",controller:["$scope","$timeout","$state","replayTo",function(a,b,c,d){a.replayTo=d,a.sending=!1,a.send=function(){a.sending=!0,b(function(){c.go("app.inbox.folder")},1e3)}}],controllerAs:"replayCtrl",resolve:{deps:b.resolveDependencies(["modules/forms/directives/input/smartSelect2","modules/forms/directives/editors/smartSummernoteEditor"]),replayTo:["InboxMessage","$stateParams",function(a,b){return a.get({id:b.message})}]}}}}).state("app.inbox.folder.compose",{url:"/compose",views:{"inbox@app.inbox":{templateUrl:"build/components/inbox/views/inbox-compose.html",controller:["$scope","$timeout","$state",function(a,b,c){a.sending=!1,a.send=function(){a.sending=!0,b(function(){c.go("app.inbox.folder")},1e3)}}],controllerAs:"composeCtrl",resolve:{deps:b.resolveDependencies(["modules/forms/directives/input/smartSelect2","modules/forms/directives/editors/smartSummernoteEditor"])}}}})}]),d.run(["$couchPotato",function(a){d.lazy=a}]),d});
