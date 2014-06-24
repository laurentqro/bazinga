exports.config = {
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  allScriptsTimeout: 11000,
  capabilities: { 'browserName': 'chrome' },
  specs: [ 'e2e/*.js' ],
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
