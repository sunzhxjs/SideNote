# SideNote
a chrome extension which help you take notes of webpages


#Local Dev Setup
##Install node

Go to http://nodejs.org

Node installation comes with npm (node package manager)
'''
$ node -v
v0.12.7
$ npm -v
2.11.3
'''

##Install gulp and webpack dependencies
Open command line and type 'npm install'. 
It should intall the following node modules:
- gulp
- gulp-util
- gulp-uglify
- gulp-concat
- gulp-sourcemaps
- webpack
- webpack-dev-server
- webpack-stream

##Create the webpack config file
'webpack.config.js'
-**entry** tells webpack where the flow starts in your webpage.
-**output** tells webpack to produce the transformed script in the desired path.
-**extensions** tells webpack to automatically add matching extensions in the matching dependencies invoked in the source code. You can also give optional configs like cache, debug and devtool.

##Create the Gulp file
To run the app, type 'gulp'.

##Task List
- [x] Initial gulp and webpack basic set up
- [ ] Document folder structure
- [ ] Rearrange files and folders as stated in  [Initial Tech / Architecture](https://docs.google.com/document/d/1blzaNeh8oL6RA0UEgoWKqBTtWvRF4mhF_ahuvFS21ic/edit#)