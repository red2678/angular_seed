'use strict';

const mainConfig = {
  subFolder: 'main-site',
  environment: 'dev',
  liveReload: true,
  debug: false,
  sourceFiles: {

    entry: './src/main-site/app/assets/es/app.es6',

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
        './bower_components/lodash/dist/lodash.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-aria/angular-aria.min.js',
        './bower_components/angular-material-icons/angular-material-icons.min.js',
        './bower_components/angular-messages/angular-messages.min.js',
        './bower_components/angular-material/angular-material.min.js',
        './bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
        './bower_components/angular-google-maps/dist/angular-google-maps.min.js',
        './bower_components/firebase/firebase.js',
        './bower_components/angularfire/dist/angularfire.min.js'
      ],
      // JS paths concatenated into head.min.js
      jsHead: [],
      // CSS paths concatenated into vendor.min.css
      css: [
        './bower_components/reset-css/reset.css',
        './bower_components/angular-material/angular-material.min.css',
        './bower_components/angular-material/angular-material.layouts.min.css',
        './bower_components/angular-material-icons/angular-material-icons.css'
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

export default mainConfig;
