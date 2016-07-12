// Test shim for running unit tests.
// Unit tests are tests of javascript code that does not interact with a live backend server.
// Unit tests are identified by the .spec.ts suffix.

// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.import('dist/test/setup.js').then(function() {
  return Promise.all(
    Object.keys(window.__karma__.files)
      .filter(onlySpecFiles)
      .map(fileToModuleName)
      .map(importModules)
  );
}).then(function() {
  __karma__.start();
}, function(error) {
  __karma__.error(error.name + ": " + error.message);
});

// Filter spec files
function onlySpecFiles(path) {
  return /\.spec\.js$/.test(path);
}

// Normalize paths to module names.
function fileToModuleName(filePath) {
  return filePath.replace(/\\/g, '/')
    .replace(/^\/base\//, '')
    .replace(/\.js/, '');
}

// Import module path
function importModules(path) {
  return System.import(path);
}
