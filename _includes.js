define([
	// account
	'./auth/module',
	'./auth/models/User',

	// layout
	'./modules/widgets/directives/widgetGrid',
	'./modules/widgets/directives/jarvisWidget',

	// dashboard
	'./dashboard/module',

	//components
	'./components/language/Language',
	'./components/language/languageSelector',
	'./components/language/language-controller',

	'./components/projects/Project',
	'./components/projects/recentProjects',

	'./components/activities/activities-controller',
	'./components/activities/activities-dropdown-toggle-directive',
	'./components/activities/activities-service',

	'./components/chat/api/ChatApi',
	'./components/chat/directives/chatWidget',
	'./components/chat/directives/chatUsers',

	'./components/shortcut/shortcut-directive',

	'./components/calendar/module',
	'./components/calendar/models/CalendarEvent',
	'./components/calendar/directives/fullCalendar',
	'./components/calendar/directives/dragableEvent',
	'./components/calendar/controllers/CalendarCtrl',

	'./components/inbox/module',
	'./components/inbox/models/InboxConfig',
	'./components/inbox/models/InboxMessage',

	'./components/todo/TodoCtrl',
	'./components/todo/models/Todo',
	'./components/todo/directives/todoList',

	// chat
	'./components/chat/module',

	// graphs
	'./modules/graphs/module',

	// tables
	'./modules/tables/module',

	// forms
	'./modules/forms/module',

	// ui
	'./modules/ui/module',

	// widgets
	'./modules/widgets/module',

	// widgets
	'./modules/maps/module',


	// misc
	'./modules/misc/module',

	// smartAdmin
	'./modules/smart-admin/module'

], function () {
	'use strict';
});
