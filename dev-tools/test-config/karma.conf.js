// karma config file for running unit tests.
module.exports = function(config) {

  config.set({

    // we want the base path to be the root of the web project
    basePath: '../../',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'dots', 'coverage'],

    files: [
      // paths loaded by karma
      {pattern: 'node_modules/core-js/client/shim.min.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'systemjs.config.js', included: true, watched: false},
      {pattern: 'dev-tools/test-config/karma-test-shim.js', included: true, watched: false},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: false},
      {pattern: 'dist/**/*.html', included: false, watched: false},
      {pattern: 'dist/**/*.css', included: false, watched: false},

      // paths to support debugging with source maps
      {pattern: 'src/**/*.ts', included: false, watched: false},
      // if were producing source maps
      // {pattern: 'dist/**/*.js.map', included: false, watched: false}

      // angular and such
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/angular2-notifications/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/ng2-pagination/**/*.js', included: false, watched: false}
    ],

    // proxied base paths - karma serves at /base/{normal-path-for-files}
    // we have to tell karma how to map the original path to the /base/{...} path
    // so it can load everything properly
    proxies: {
      // required for component assets fetched by Angular's compiler
      '/src/': '/base/src/',
      '/dist/': '/base/dist/',
      '/node_modules/': '/base/node_modules/'
    },

    port: 9876,
    logLevel: config.LOG_INFO,
    colors: true,
    // when true, reruns the tests whenever watched files change.
    autoWatch: false,

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    // source files that we want to generate coverage for.
    // do not included tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'json', subdir: 'report-json'}
      ]
    },

    // when true, open the browser, run the tests, then close the browser (one test run)
    singleRun: true
  })
};
