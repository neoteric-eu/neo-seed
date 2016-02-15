## ![Installation](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/stop-icon.png) Installation
Project requires having installed:

* [NodeJS](http://nodejs.org/)
* [Node Package Manager](https://www.npmjs.com/)
* [Grunt Command Line Interface](https://github.com/gruntjs/grunt-cli)
* [Phantom](http://phantomjs.org/)

After downloading the project form Gitlab repository run command from command line:

```bash
# install global dependencies
npm install -g bower phantom
# install dependencies
bower install --force
npm install
# run grunt installation tasks
npm start
```

## ![Running](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/play-icon.png) Running
To continuously develop library you have to symlink source code of neo-seed to any container project:

```javascript
ln -s [absolute-path-to-neo-seed]src/seed [absolute-path-to-container-path]/src/seed
```

## ![Guidelines](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/favourite-2-icon.png) Guidelines

Before contributing please read following documents:

* [Code style guide](https://gitlab.neoteric.eu/frontend/neo-container/wikis/guidlines)
* [Commit message format](https://gitlab.neoteric.eu/frontend/neo-container/wikis/commit-message) 

Make sure that every changes you make are bound to ticket from [Taiga neoStack project](https://taiga.neoteric.eu/project/bmogadorski-neostack/).

When you finished your changes make sure:
1. Test are updated covering your code, 
2. Code is documented with jsdoc comments
3. Are given examples of usage
4. You have submited pull request to development on Gitlab

## ![Releasing](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/cloud-icon.png) Releasing
Releasing is done in following steps: 

1. Run `grunt build` on `development` branch
2. Bump version in `bower.json` and `package.json` to newer
3. Run `grunt changelog` task to update changelog and format them properly if needed
4. Push changes to `development` with commit message `chore: bump version to X.X.X`
5. Merge branch `development` into `master`
6. Tag new version using _semver versioning_ convention `vX.X.X`
7. **Important!** Make sure that you released container with exact same matching version 


## ![Testing](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/laboratory-icon.png) Testing
Repository is covered with unit test written in Jasmine. Before making merge request make sure that you updated 
test suits covering changed functionality. You can run unit tests using command:

```javascript
grunt test
```

## ![ChangeLog](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/announcement-icon.png) Changelog

To check changes and migration guides between versions see 
[changelog](https://gitlab.neoteric.eu/frontend/neo-seed/blob/development/CHANGELOG.md)