// $ protractor protractor.conf.js

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'feeder.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
