# tools v0.1.0

Grunt task to run tests with [Jest](http://facebook.github.io/jest/).


## Getting Started

```shell
bundle install
```


```shell
npm install
```

```shell
npm install gulp
```



## Run grunt task
_Run this task with the `grunt watch` command._


## Run gulp task
_Run this task with the `gulp` command._




# study note

### NPM:
_brew update
_brew install node(Mac)

_http://smalljs.org/package-managers/npm/
_http://www.sitepoint.com/beginners-guide-node-package-manager/


_npm init
_npm install underscore --save-dev
_npm install request --save
_npm install -g underscore 

_npm install underscore@1.7.0 --save-dev

_npm update underscore
_npm list

_ls ~/.npm
_npm cache clean



### Bower:
_http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web…
_https://css-tricks.com/whats-great-bower/

_npm install -g bower
_bower search backbone

_bower install jquery
_bower install backbone

_bower install jquery#1.7.0 #specify version of a package

_we can also install by github url or a single file:
_bower install git://github.com/pivotal/jasmine.git
_bower install http://backbonejs.org/backbone-min.js
_You can even install a package from your own computer: something you’re working on
_bower install ~/code/secretProject

_update next version of a library, note that you can’t pass a package name to the update command 
_bower update

_if you want to update a specify version of a specify library:
_bower install jquery#1.7.0

_How to use?
```
<script src="components/jquery/jquery.js"></script>
```
_Other cammand:
_list the packages you currently have installed
_bower ls
_bower lookup backbone
_bower info

_if you want to remove all the packages cached to ~/.bower
_bower cache-clean

_bower init




### Grunt
_http://gruntjs.com/getting-started
_https://www.smashingmagazine.com/2013/10/get-up-running-grunt/


_npm install grunt-cli --save-dev
_npm install grunt --save-dev
_npm install grunt-contrib-jshint --save-dev
_npm install grunt-contrib-nodeunit --save-dev
_npm install grunt-contrib-uglify --save-dev

_npm install jest-cli --save-dev
_npm install grunt-contrib-watch grunt-exec --save-dev
`
grunt watch
`


### Gulp
_https://www.codefellows.org/blog/quick-intro-to-gulp-js

_npm install gulp gulp-util --save-dev
_npm install gulp-ruby-sass --save-dev
_npm install gulp-notify gulp-concat gulp-uglify gulp-util gulp-watch gulp-ruby-sass --save-dev

_npm install gulp -g

_https://github.com/iaretiga/gulp-jest-watcher/blob/master/gulpfile.js
`
gulp
`
