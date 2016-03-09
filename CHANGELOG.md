<a name="2.4.2"></a>
## [2.4.2](//compare/v2.3.8...v2.4.2) (2016-03-09)


### Features

* **seed/module:** Disable debug data on production env d341037
* **HttpRequestInterceptor:** #82 - Enabled query param serializing strategy based on API version 2f1196b
* **UserPacker:** - Unpacking for authInfo and login in API v2 3132477


<a name="2.3.7"></a>
## [2.3.7](//compare/v2.3.6...v2.3.7) (2016-03-04)


### Features

* **timezone:** Extend user model with timezone and set the default timezone on user session ini a1b894a
* **jarvis-widget:** Removed jarvis-widgets support a1b894a5


<a name="2.3.6"></a>
## [2.3.6](//compare/v2.3.4...v2.3.6) (2016-02-29)


<a name="2.3.4"></a>
## [2.3.4](//compare/v2.3.3...v2.3.4) (2016-02-25)


### Bug Fixes

* **config:** Enabled html5mode configuration d711a67



<a name="2.3.3"></a>
## [2.3.3](//compare/v2.3.2...v2.3.3) (2016-02-24)


### Bug Fixes

* **register:** #103 - Registration endpoint does not return a token 276a336



<a name="2.3.2"></a>
## [2.3.2](//compare/v2.3.1...v2.3.2) (2016-02-22)


### Bug Fixes

* **module.js:** #99 - enable legacy promise extensions 2e7e1cf



<a name="2.3.1"></a>
## [2.3.1](//compare/v2.3.0...v2.3.1) (2016-02-22)


### Bug Fixes

* Fixed test errors 756b600



<a name="2.3.0"></a>
# [2.3.0](//compare/v2.2.15...v2.3.0) (2016-02-22)


### Features

* **registration:** #14 - User registration b102093
* **resetPassword:** #15 - User password reset ef41122


<a name="2.2.15"></a>
## [2.2.15](//compare/v2.2.13...v2.2.15) (2016-02-12)


### Features

* **neoNavigation:** #38 - Allow app to have no navigation file 3a018aa


<a name="2.2.13"></a>
## [2.2.13](//compare/v2.2.12...v2.2.13) (2016-02-08)


### Bug Fixes

* **bower:** changed order of resolving registries 72d8c61

### Features

* **cookieConsent:** #39 - general config to show/hide cookie consent 78bcd94
* **lodash-deep:** #44 - remove lodash-deep dependency 774453a
* **angular-hotkeys:** #45 - remove angular-hotkeys dependency de863f2
* **morris:** #47 - remove additional morris dependency 0c5c4b2

BREAKING CHANGE:
Following dependencies are _deprecated_ and should be replaced/removed from projects:
- `lodash-deep`
- `angular-hotkeys`
- `morris`
- `raphael`


<a name="2.2.12"></a>
## [2.2.12](//compare/v2.2.11...v2.2.12) (2016-02-03)


### Bug Fixes

* **overrides.less:** Overrides import hotfix. 7988419


<a name="2.2.11"></a>
## [2.2.11](//compare/v2.2.10...v2.2.11) (2016-02-02)


### Bug Fixes

* **User:** Added missing LanguageAPI dependency. f1b9d7d



<a name="2.2.10"></a>
## [2.2.10](//compare/v2.2.9...v2.2.10) (2016-02-02)


### Bug Fixes

* **auth:** Fixed broken redirection of defaultRedirectStateAfterLogin cc2030a

### Features

* **README:** Added readme file and documentation generation 24b5b4d


<a name="2.2.7"></a>
## [2.2.7](//compare/v2.2.6...v2.2.7) (2016-02-01)


### Bug Fixes

* **DatetimeSerializerService:** Decode date without modyfing source object 8f44938
* **User,Language:** Fix user language model encode/decode 01611b3

### Features

* Replace HttpRequestInterceptor with build in , turn off legacy promise extension 968b5e5


<a name="2.2.6"></a>
## [2.2.6](//compare/v2.2.5...v2.2.6) (2016-01-27)


### Bug Fixes

* Added missing less file 1671909



<a name="2.2.5"></a>
## [2.2.5](//compare/v2.2.4...v2.2.5) (2016-01-27)

### Features

* **components:** Added cookie policy banner 78a8a9f


<a name="2.2.4"></a>
## [2.2.3](//compare/v2.1.5...v2.2.4) (2016-01-21)



<a name="2.1.5"></a>
## [2.1.5](//compare/v2.1.4...v2.1.5) (2016-01-13)


### Features

* **config:** #3487 -  Enable default redirect customization 765aa72



<a name="2.1.4"></a>
## [2.1.4](//compare/v2.1.3...v2.1.4) (2016-01-11)
### Bug Fixes

* **grunt:** Removed cleaning of bower_components catalog in favor of `bower cache clean`




<a name="2.1.3"></a>
## [2.1.3](//compare/v2.1.2...v2.1.3) (2016-01-08)


### Bug Fixes

* **Grunt:** Updated cleanup aliases 01ce01f
* **Grunt:** Updated coverage aliases 34b9b34
* **Grunt:** Updated coverage aliases 4e21623



<a name="2.1.2"></a>
## [2.1.2](//compare/v2.1.1...v2.1.2) (2016-01-07)


### Bug Fixes

* **bower.json:** Removed copying angular-mocks 61350b7



<a name="2.1.1"></a>
## [2.1.1](//compare/v2.1.0...v2.1.1) (2016-01-05)


### Bug Fixes

* **unit tests** Fixed angular-mocks dependency path


<a name="2.1.0"></a>
# [2.1.0](//compare/v2.0.2...v2.1.0) (2016-01-05)

### Features

* **Grunt:** #3123 - Create independent seed building process 94eb0e4


### Bug Fixes

* **unit tests** Fixed back to work unit tests


<a name="2.0.2"></a>
## [2.0.2](//compare/v2.0.1...v2.0.2) (2015-12-21)




<a name="2.0.1"></a>
## [2.0.1](//compare/v2.0.0...v2.0.1) (2015-12-17)


### Bug Fixes

* **header.html:** Removed speech button from header. 4e2833b



<a name="2.0.0"></a>
# [2.0.0](//compare/v1.2.6...v2.0.0) (2015-12-17)


### Features

* **styles:** #3448 - Abstract less configuration from seed to container configuration 0933430, closes #3448


### BREAKING CHANGES

* styles: From now on Yeoman generator have to be used to install container.

NPM set-up:
```
npm set registry http://ntrc-delta.neoteric.eu:4873
npm install -g generator-neo
```

And from container catalog run:
`yo neo`

Remove from container **all** files except:
- `src/config`
- `src/bower.json`
- `.bowerrc`

Include all custom application styles from index.html to `src/config/styles/apps.less`.


<a name="1.2.6"></a>
## [1.2.6](//compare/v1.2.5...v1.2.6) (2015-12-14)



<a name="1.2.5"></a>
## [1.2.5](//compare/v1.2.4...v1.2.5) (2015-12-14)


### Bug Fixes

* **jsonStringify:** Reverted jsonStringify to use ~ operators. b8be205



<a name="1.2.4"></a>
## [1.2.4](//compare/v1.2.4...v1.2.5) (2015-12-14)


### Bug Fixes

* **locale:** updated language files to dasherized. a956771


<a name="1.2.3"></a>
## [1.2.3](//compare/v1.2.2...v1.2.3) (2015-12-11)


### Bug Fixes

* **lodash:** Fixed Jshint errors in lodash extensions. 30907e2



<a name="1.2.2"></a>
## [1.2.2](//compare/v1.2.1...v1.2.2) (2015-12-11)


### Bug Fixes

* **LanguageAPI:** #3424 - Enable both ISO and POSIX language codes 59ed5db, closes #3424


### BREAKING CHANGES

* LanguageAPI: Manually update `config/settings/language.json`



<a name="1.2.1"></a>
## [1.2.1](//compare/v1.2.0...v1.2.1) (2015-12-03)

<a name="1.2.0"></a>
# [1.2.0](//compare/v1.1.7...v1.2.0) (2015-12-03)

### Bug Fixes

* **EnumSerializer:** #3329 - EnumSerializer doesn't work 489ac2e
* **neoNavigation:** #3354 - Guarantee order of navigation items in neoNavigation 217786b, closes #3354
* **neoPreload:** #3353 - Remove neoPreload 0735062, closes #3353
* **Serializer:** #3343 - Handling demarshaling errors in date/time/datetime models 9330c0c

### Features

* **LanguageAPI:** #3330 - Add Accept-Language to neoRequestHeaders dfe7ede
* **neoNavigation:** #3251 - Parametrise environment configuration of the application 7c7384d, closes #3251
* **neoVersionTag:** #3394 - Add container version directive 75a9c47


<a name="1.1.6"></a>
## [1.1.6](//compare/v1.1.5...v1.1.6) (2015-11-23)


### Bug Fixes

* **Serializer:** #3343 - Handling marshaling errors in date/time/datetime models e912f4a



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
