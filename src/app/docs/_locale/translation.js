define(['angular', 'app'], function (angular) {
angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
	gettextCatalog.setStrings('en_GB', {
		"Actions": "Actions",
		"Color": "Color",
		"Color picker": "Color picker",
		"Custom": "Custom",
		"Date": "Date",
		"Date & Time": "Date & Time",
		"Delete template": "Delete template",
		"Docs": "Docs",
		"Documents": "Documents",
		"Edit": "Edit",
		"Edit task": "Edit task",
		"Edit template": "Edit template",
		"Email": "Email",
		"Field": "Field",
		"Integer": "Integer",
		"Multi-select": "Multi-select",
		"Name": "Name",
		"New": "New",
		"No tasks": "No tasks",
		"Number": "Number",
		"Numeric": "Numeric",
		"Phone": "Phone",
		"Project": "Project",
		"Remove task": "Remove task",
		"Required": "Required",
		"Search": "Search",
		"Select": "Select",
		"Selection": "Selection",
		"Status": "Status",
		"String length": "String length",
		"Task": "Task",
		"Template": "Template",
		"Text": "Text",
		"Text input": "Text input",
		"Textarea": "Textarea",
		"Time": "Time",
		"Uri": "Uri",
		"Url": "Url",
		"document": "document",
		"document template": "document template"
	});
/* jshint +W100 */
}]);
});
