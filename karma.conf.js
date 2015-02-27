// Karma configuration
// Generated on Wed Jan 07 2015 10:29:26 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browserDisconnectTimeout: 50000,
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["browserify", "mocha"],


    // list of files / patterns to load in the browser
    files: [
      "app/compiled-tests/**/*.js"
      //"app/powered-tests/index.js"
    ],


    // list of files to exclude
    exclude: [
    ],

    // Files to browserify
    browserify: {
      debug: true,
      transform: [
        "node-underscorify",
        "espowerify"
      ]
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
//      "/**/*.browserify": "browserify",
      "app/compiled-tests/**/*.js": "browserify" ,
      "app/powered-tests/index.js": "coverage"
//      "app/compiled-tests/**/*.js": "coverage"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [/*'PhantomJS'*/],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};