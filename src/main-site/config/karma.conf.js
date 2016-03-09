module.exports = function (config) {
  config.set({

    basePath: '../app-bk',

    files: [
      '../../../bower_components/angular/angular.js',
      '../../../bower_components/angular-route/angular-route.js',
      '../../../bower_components/angular-mocks/angular-mocks.js',
      '../_compiled/main.min.js',
      '../_compiled/partials.min.js',
      '../app-bk/**/*.test.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
