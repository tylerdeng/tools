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

brew update

brew install node(Mac)

http://smalljs.org/package-managers/npm/

http://www.sitepoint.com/beginners-guide-node-package-manager/


npm init

npm install underscore --save-dev

npm install request --save

npm install -g underscore 

npm install underscore@1.7.0 --save-dev

npm update underscore

npm list

ls ~/.npm

npm cache clean



### Bower:
http://code.tutsplus.com/tutorials/meet-bower-a-package-manager-for-the-web

https://css-tricks.com/whats-great-bower/

npm install -g bower
bower search backbone

bower install jquery
bower install backbone

bower install jquery#1.7.0 #specify version of a package

we can also install by github url or a single file:

bower install git://github.com/pivotal/jasmine.git

bower install http://backbonejs.org/backbone-min.js

You can even install a package from your own computer: something you’re working on

bower install ~/code/secretProject

update next version of a library, note that you can’t pass a package name to the update command 

bower update

if you want to update a specify version of a specify library:

bower install jquery#1.7.0

How to use?
```
<script src="components/jquery/jquery.js"></script>
```
Other cammand:

list the packages you currently have installed

bower ls

bower lookup backbone

bower info

if you want to remove all the packages cached to ~/.bower

bower cache-clean

bower init




### Grunt
http://gruntjs.com/getting-started

https://www.smashingmagazine.com/2013/10/get-up-running-grunt/


npm install grunt-cli --save-dev

npm install grunt --save-dev

npm install grunt-contrib-jshint --save-dev

npm install grunt-contrib-nodeunit --save-dev

npm install grunt-contrib-uglify --save-dev

npm install jest-cli --save-dev

npm install grunt-contrib-watch grunt-exec --save-dev
`
grunt watch
`


### Gulp
https://www.codefellows.org/blog/quick-intro-to-gulp-js

npm install gulp gulp-util --save-dev

npm install gulp-ruby-sass --save-dev

npm install gulp-notify gulp-concat gulp-uglify gulp-util gulp-watch gulp-ruby-sass --save-dev

npm install gulp -g

https://github.com/iaretiga/gulp-jest-watcher/blob/master/gulpfile.js
`
gulp
`
