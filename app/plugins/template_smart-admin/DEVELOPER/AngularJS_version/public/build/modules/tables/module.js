define(["angular","angular-couch-potato","angular-ui-router"],function(a,b){"use strict";var c=a.module("app.tables",["ui.router"]);return b.configureApp(c),c.config(["$stateProvider","$couchPotatoProvider",function(a,b){a.state("app.tables",{"abstract":!0,data:{title:"Tables"}}).state("app.tables.normal",{url:"/tables/normal",data:{title:"Normal Tables"},views:{"content@app":{templateUrl:"build/modules/tables/views/normal.html"}}}).state("app.tables.datatables",{url:"/tables/datatables",data:{title:"Data Tables"},views:{"content@app":{templateUrl:"build/modules/tables/views/datatables.html",resolve:{deps:b.resolveDependencies(["modules/tables/directives/datatables/datatableBasic","modules/tables/directives/datatables/datatableColumnFilter","modules/tables/directives/datatables/datatableColumnReorder","modules/tables/directives/datatables/datatableTableTools"])}}}}).state("app.tables.jqgrid",{url:"/tables/jqgrid",data:{title:"Jquery Grid"},views:{"content@app":{controller:"JqGridCtrl",templateUrl:"build/modules/tables/views/jqgrid.html",resolve:{deps:b.resolveDependencies(["modules/tables/controllers/JqGridCtrl","modules/tables/directives/jqgrid/jqGrid"])}}}})}]),c.run(["$couchPotato",function(a){c.lazy=a}]),c});
