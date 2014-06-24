module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/vendor/angular.js',
      'public/vendor/angular-route.js',
      'public/vendor/angular-mocks.js',
      'public/vendor/*.js',
      'public/app.js',
      'public/controllers/*.js',
      'public/directives/*.js',
      'public/services/*.js',
      'public/filters/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
  });
};
