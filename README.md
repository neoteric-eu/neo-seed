![Neoteric Logo](src/styles/img/neoteric-logo.png)
Angular Seed Template 1.5.2 (alpha)
================

## Installation
Project requires having installed:

* [NodeJS](http://nodejs.org/) 
* [Node Package Manager](https://www.npmjs.com/)

After downloading the project form Gitlab repository run command from command line:

```javascript
npm install
```
## Running
By default after installation application configuration is set to _development_.
Local server can by run by command:

```javascript
grunt serve
```

## Deploy
You can locally create production version of code by running:

```javascript
grunt dist
```

Then run in order to test working app in browser:

```javascript
connect:dist
```


## Documentation

Documentation is available under `docs` directory.

To generate documentation run: 

```javascript
grunt docs
```

Code can be also auto-annotated using command:

```javascript
grunt code:auto-comment
```

## Tests
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

## Reference
Additional documentation available on [Redmine](http://redmine.neoteric.eu:3010/projects/angularjs-baza-wiedzy)

