define(["../module"],function(a){"use strict";a.registerController("MapsDemoCtrl",["$scope","$http","$q","SmartMapStyle","uiGmapGoogleMapApi","SmartMapInstances",function(a,b,c,d,e,f){a.styles=d.styles,e.then(function(a){a.visualRefresh=!0}),a.setType=function(b){d.getMapType(b).then(function(c){a.mapInstance.mapTypes.set(b,c),a.mapInstance.setMapTypeId(b)}),a.currentType=b},f.getMap("demoMap").then(function(b){a.mapInstance=b}),a.map={center:{latitude:23.895883,longitude:-80.650635},zoom:5},a.options={scrollwheel:!1,disableDefaultUI:!0}}])});
