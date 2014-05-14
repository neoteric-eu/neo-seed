Angular seed - template
================

This is angulars seed for REST app. It's contains git submodule "miniCore". You can read about submodules at git book [PL]/[EN]


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

Step3
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




[PL]:http://git-scm.com/book/pl/Narz%C4%99dzia-Gita-Modu%C5%82y-zale%C5%BCne
[EN]:http://git-scm.com/book/en/Git-Tools-Submodules
