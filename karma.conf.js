// Karma configuration
// Generated on Wed Jan 07 2015 10:29:26 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browserDisconnectTimeout: 50000,
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha-debug", "mocha"],

    // list of files / patterns to load in the browser
    files: [
      "app/libraries/jquery/dist/jquery.js",
      "app/libraries/underscore/underscore.js",
      "app/libraries/backbone/backbone.js",
      "app/libraries/backbone.marionette/lib/backbone.marionette.js",
      "app/libraries/backbone.paginator/lib/backbone.paginator.js",
      "app/libraries/power-assert/build/power-assert.js",
      "app/compiled-tests/**/*.js"
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "app/compiled-tests/**/*.js": ['sourcemap', 'coverage'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [/*'nyan',*/ 'mocha', 'coverage'],

    nyanReporter: {
      suppressErrorReport: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [/*'PhantomJS'*/],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
