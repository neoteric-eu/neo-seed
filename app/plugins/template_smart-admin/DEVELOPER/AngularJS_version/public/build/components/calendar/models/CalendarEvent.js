define(["../module"],function(a){"use strict";a.factory("CalendarEvent",["$resource",function(a){return a("api/events.json",{_id:"@id"})}])});
