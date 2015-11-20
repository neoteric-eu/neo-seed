<a name="1.1.5"></a>
## [1.1.5](//compare/v1.1.4...v1.1.5) (2015-11-19)

### Features

* **BaseModel** #3331 - Extend BaseModel for FindMany extension


<a name="1.1.4"></a>
## [1.1.4](//compare/v1.1.3...v1.1.4) (2015-11-17)


### Bug Fixes

* **neoSession:** #3304 - clearSession haven't returned the promise. 57eea04
* **theme.app.js:** #3292 - Remove theme.app.js acc2848

### Features

* **neoNavigation:** #3133 - Remove smart-menu.js e2db72a, closes #3133
* **neoPageTitle:** #3304 - Add missing neoPageTitle directive c0f39cb, closes #3304


### BREAKING CHANGES

* neoPageTitle: 
	Now application is bootstrapped on `<html>` tag instead of `<body>`. 
	Please manually update files:  `src/index.html`, `src/container.js` and `config/protractor/protractor.conf.js` 
	in application container.
	
* neoNavigation: 
	From now every `_navigation.html` file has to be structured 
	based on `neoNavigationGroup` and `neoNavigationItem` directives. 
	See included examples in documentation of those directives.

<a name="1.1.3"></a>
## [1.1.3](//compare/v1.1.2...v1.1.3) (2015-11-10)


### Bug Fixes

* **auth:** #3119 - Redirection to initial address after logging in dec29f2, closes #3119
* **layout:** #3249 - Directive state-breadcrumbs links to state and its parents 1b73730, closes #3249
* **helpers** #3134 - Transforming decodeFilters and encodeFilters into Serializers

### BREAKING CHANGES

* layout: Directive `<state-breadcrumbs>` renamed to `<neo-state-breadcrumbs>`
* helpers: Instead of serializing properties with: 
```
encode: 'DateEncode',
dencode: 'DateDecode'
```
now use: 
```
serialize: 'Date'
```

<a name="1.1.2"></a>
## [1.1.2](//compare/v1.1.1...v1.1.2) (2015-11-06)

### Bug Fixes

* **session:** #3242 - Application haven't loaded permissions properly on kick off 5b69b8b, closes #3242
* **views:** #3204 - Remove  hrefVoid directive from all views 0742832, closes #3204

### Features

* **auth:** Redirection to initial address after logging in b2add59, closes #3119

<a name="1.1.1"></a>
## [1.1.1](//compare/v1.1.0...v1.1.1) (2015-11-02)

### Bug Fixes

* **layout:** #3203 - Added optional showing of EU logotypes e01e2a0, closes #3203
* **components:** #3203 - Fixed initial language selection. f60d394

<a name="1.1.0"></a>
## [1.1.0](//compare/v1.0.9...v1.1.0) (2015-10-26)

### Features

* **seed:** Migrated dependencies from container to seed
* **seed:** Enabled changelog in release
* **seed:** added CHANGELOG and README
