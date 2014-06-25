NeoB2b - NeoDocs
================
Readmine: http://redmine.neoteric.eu:3010/projects/neob2b-neodocs


Step1
---
```bash
git clone git@gitlab.neoteric.eu:developers/angular-seed-template.git [project_name]
git remote set-url origin  git@gitlab.neoteric.eu:developers/project_name.git
git push -u origin master

```

Step2
---
```bash
git submodule init
git submodule update
```

Step 2
---
```bash
npm install
bower install
grunt build
grunt githooks // probably unnecessary - should invoke after npm install
grunt serve
```


Tests
---
- `grunt test` run unit tests
- `grunt coverage` run coverage
