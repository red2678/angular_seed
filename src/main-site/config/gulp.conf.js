'use strict';

module.exports = {
  subFolder: 'main-site',
  sourceFiles: {

    // ES2015 (ES6) paths
    es: [
      './src/main-site/app/**/*.es6'
    ],

    // JS paths concatenated into main.min.js
    js: [
      './src/main-site/_compiled/app/**/*.js'
    ],

    // Vendor paths
    vendor: {
      // JS paths concatenated into vendor.min.js
      js: [
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js'
      ],
      // JS paths concatenated into head.min.js
      jsHead: [],
      // CSS paths concatenated into vendor.min.css
      css: [
        './bower_components/reset-css/reset.css'
      ],
      // Vendor image paths for copying into {build}/css/images
      img: []
    },

    // Vendor or non-vendor font paths to copy to fonts folder in the build
    fonts: [],

    docs: [],

    // SCSS source path vars
    // All properties here, EXCEPT 'helpers' will be turned into a file named
    // the same as the property and comprised of the files included by the array
    // **NOTE** helpers are all the files that will be intercepted by the SASS
    // custom importer
    sass: {
      helpers: [
        'variables',
        'mixins'
      ],
      utility: [
        './src/main-site/app/sass/**/_*.scss'
      ],
      screen: [
        './src/main-site/app/**/screen.scss'
      ],
      ie: [
        './src/main-site/app/**/ie.scss'
      ],
      print: [
        './src/main-site/app/**/print.scss'
      ],
      projector: [
        './src/main-site/app/**/projector.scss'
      ]
    },

    // HTML Sources to process
    html: [],

    // JADE Sources to process
    jade: [
      './src/main-site/app/**/*.jade'
    ],

    // Partials Sources to process
    partials: [
      './src/main-site/app/**/assets/**/partials/**/*.html'
    ],

    // Files to Copy source path vars
    copy: [

      // Bring only what you need to survive
      './src/main-site/app/robots.txt'

    ],

    // files to test
    tests: {
      unit: {
        configFile: '',
        specs: []
      },
      integration: {
        configFile: './src/main-site/config/protractor.conf.js',
        specs: ['./src/main-site/app/**/*.spec.js']
      }
    }

  }
};
