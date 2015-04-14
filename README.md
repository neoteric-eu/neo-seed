![Neoteric Logo](http://burczu-programator.pl/wp-content/uploads/2015/02/yeoman_io.png)

Angular Seed Template 1.5.2 (beta)
================

[![forthebadge](http://forthebadge.com/images/badges/built-with-swag.svg)](http://forthebadge.com)
## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/stop-icon.png) Installation
Project requires having installed:

* [NodeJS](http://nodejs.org/) 
* [Node Package Manager](https://www.npmjs.com/)
* [Grunt Command Line Interface](https://github.com/gruntjs/grunt-cli)

After downloading the project form Gitlab repository run command from command line:

```javascript
npm install
```
## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/play-icon.png)  Running
By default after installation application configuration is set to _development_.
Local server can by run by command:

```javascript
grunt serve
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/upload-icon.png)  Deploy
You can locally create production version of code by running:

```javascript
grunt dist
```

Then run in order to test working app in browser:

```javascript
connect:dist
```


## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/attach-2-icon.png)  Documentation

Documentation is available under `docs` directory.

To generate documentation run: 

```javascript
grunt docs
```

Code can be also auto-annotated using command:

```javascript
grunt code:auto-comment
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/laboratory-icon.png)  Tests
You can run multiple type of test on your local environment:

* E2E _(via. Protractor)_

	```javascript
	grunt test:e2e
	```
	
* Unit _(via. Jasmine)_

	```javascript
	grunt test:unit
	```
	
* Code Coverage (via. Istanbul)
	
	```javascript
	grunt coverage
	```

To run all tests simply type:
```javascript
grunt test
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/info-icon.png)  Reference
Additional documentation available on [Redmine](http://redmine.neoteric.eu:3010/projects/angularjs-baza-wiedzy)

