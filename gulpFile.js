var gulp = require('gulp');

var karma = require('node-karma-wrapper');
var assign = require('lodash.assign');



var src = {
    scripts :  './src/*.js',
    tests :  './test/*Spec.js'
};


// Karma server

function testConfig(configFile, customOptions){
    var options = { configFile: configFile };
    var travisOptions = process.env.TRAVIS && { browsers: [ 'Firefox', 'PhantomJS'], reporters: ['dots'], singleRun: true  };
    return assign(options, customOptions, travisOptions);
}

var karmaServer = karma(testConfig('./karma.conf.js'));



gulp.task('serve', function() {
    karmaServer.inBackground();

    gulp.watch([src.scripts, src.tests], function(){
        karmaServer.run();
    });
});

gulp.task('karma', function() {
    karmaServer.simpleRun();
});