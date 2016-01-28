/* @flow */
'use strict';

// <editor-fold desc="Imports">
// Configurations
import mainConfig from './src/main-site/config/gulp.conf';

// Node Modules
import gulp from 'gulp';
import g$ from 'gconfig';

// Gulp Plugins
import babel from 'gulp-babel';
import eslint from 'gulp-eslint'
import esDoc from 'gulp-esdoc';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import declare from 'gulp-declare';
import git from 'gulp-git';
import gulpif from 'gulp-if';
import gulpSass from 'gulp-sass';
import gutil from 'gulp-util';
import gzip from 'gulp-gzip';
import handlebars from 'gulp-handlebars';
import jade from 'gulp-jade';
import livereload from 'gulp-livereload';
import minifyCss from 'gulp-minify-css';
import minifyhtml from 'gulp-minify-html';
import obfuscate from 'gulp-obfuscate';
import plumber from 'gulp-plumber';
import processhtml from 'gulp-processhtml'
import rename from "gulp-rename";
import sourcemaps from 'gulp-sourcemaps';
import tar from 'gulp-tar';
import uglify from 'gulp-uglify';
import wrap from 'gulp-wrap';
import templateCache from 'gulp-angular-templatecache';
import angularProtractor from 'gulp-angular-protractor';
import {Server} from 'karma';

// </editor-fold>

// <//<editor-fold desc="Helper Functions">
function reloadBrowser(gulpMode:boolean = true, silent:boolean = true):void {
	let releaseMode = g$.liveReload && !g$.produceArtifacts;
	if (gulpMode) {
		return gulpif(releaseMode, livereload({silent: silent}), connect.reload());
	} else {
		if (releaseMode) {
			livereload({silent: silent});
		} else {
			connect.reload()
		}
	}
}

// </editor-fold>

// <editor-fold desc="Main Gulp Tasks">
// Default Task - Build and Watch **************************************************************************************
gulp.task('default', [
	'clean',
	'loadConfig',
	'sass',
	'js',
	'html',
	'jade',
	'copy',
	'vendorJs',
	'fonts',
	'connect',
	'watch'
]);

// Build Only Task *****************************************************************************************************
gulp.task('build', [
	'clean',
	'loadConfig',
	'sass',
	'js',
	'partials',
	'html',
	'jade',
	'copy',
	'vendorJs',
	'fonts'
]);

// Watch Task **********************************************************************************************************
gulp.task('watch', () => {
	if (g$.liveReload) {
		livereload.listen();
	}

	gulp.watch(g$.sourceFiles.es, ['js', 'jsLint']);
	gulp.watch(g$.sourceFiles.jade, ['jade']);
	gulp.watch(g$.sourceFiles.jsHead, ['jsHead']);
	gulp.watch([
		g$.sourceFiles.sass.utility,
		g$.sourceFiles.sass.screen,
		g$.sourceFiles.sass.projector,
		g$.sourceFiles.sass.ie,
		g$.sourceFiles.sass.print
	], ['sass']);
	gulp.watch(g$.sourceFiles.html, ['html']);
	gulp.watch(g$.sourceFiles.partials, ['partials']);
	gulp.watch(g$.sourceFiles.fonts, ['fonts']);
	gulp.watch(g$.sourceFiles.vendor.js, g$.sourceFiles.vendor.css, ['vendorJs']);
	gulp.watch(g$.sourceFiles.handlebars, ['handlebars']);
});

// </editor-fold>

// <editor-fold desc="Build Tasks">
// Environment Check Task **********************************************************************************************
gulp.task('turnOffLiveReload', () => {
	g$.liveReload = false;
});

// Produce Artifacts Check Task ****************************************************************************************
gulp.task('produceArtifacts', () => {
	g$.produceArtifacts = true;
	g$.environment = 'release';
});

// Environment Check Task **********************************************************************************************
gulp.task('loadConfig', () => {

	mainConfig.environment = mainConfig.environment || 'dev';
	mainConfig.liveReload = true;
	mainConfig.debug = false;
	mainConfig.serverConfig = {
		root: g$.build + 'main-site/app',
		livereload: mainConfig.liveReload,
		quiet: true,
		port: 64031
	};

	g$.loadConfig(mainConfig);

	return gutil.log('\n**************************\nGenerating ' + g$.environment +
		' Build\n**************************');
});

// Copy All Task *******************************************************************************************************
gulp.task('copy', () => {

	g$.buildInfo();

	return gulp.src(g$.sourceFiles.copy, {
			base: g$.source
		})
		.pipe(gulp.dest(g$.build))
		.pipe(reloadBrowser());
});

// Connect Task ********************************************************************************************************
gulp.task('connect', () => {

	connect.server(g$.serverConfig);

	// run some headless tests with phantomjs
	// when process exits:
	// connect.serverClose();
});

// Connect For Testing Task ********************************************************************************************
gulp.task('connectTest', ['loadConfig'], () => {

	connect.server({
		root: g$.build + 'app',
		livereload: false,
		port: 64040
	});
});

// </editor-fold>

// <editor-fold desc="Javascript Tasks">
// jsDoc Task **********************************************************************************************************
gulp.task('jsDoc', ['js'], () => {

	g$.deleteFiles([
		g$.docs + '/**/*',
		'!' + g$.docs + '.gitignore'
	]);

	return gulp.src(g$.sourceFiles.docs)
		.pipe(esDoc({
			source: g$.source,
			destination: g$.docs,
			autoPrivate: true,
			includes: ["\\.(es6)$"],
			coverage: true,
			includeSource: true,
			plugins: [
				{"name": "esdoc-es7-plugin"}
			]
		}));
});

// Linter Task **********************************************************************************************************
gulp.task('jsLint', () => {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});

// JS Task *************************************************************************************************************
gulp.task('js', ['babel'], () => {

	g$.deleteFiles([g$.build + 'app/js/main.min.js']);

	return gulp.src(g$.sourceFiles.js, {
			base: g$.source + '_compiled'
		})
		.pipe(plumber())
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.init()))
		.pipe(concat('main.min.js'))
		.pipe(uglify({
			comments: 'all'
		}))
		// .pipe(obfuscate({ replaceMethod : obfuscate.ZALGO }))
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(g$.build + 'app/js'))
		.pipe(gulp.dest(g$.source + '_compiled'))
		.pipe(reloadBrowser());
});

// Babel ***************************************************************************************************************
gulp.task('babel', () => {

	g$.deleteFiles([g$.source + '_compiled/**/*.js']);

	return gulp.src(g$.sourceFiles.es, {
			base: g$.source
		})
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(rename(function(path) {
			if (path.dirname === 'es') {
				path.dirname = 'js';
			}
			else if (path.dirname.indexOf('es') > -1) {
				path.dirname = g$.root + path.dirname.replace(g$.DS + 'es', g$.DS + 'js');
			}
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(g$.source + '_compiled'))
		.pipe(reloadBrowser());
});

// </editor-fold>


// <editor-fold desc="Testing Tasks">
/**
 * Testing task
 */
gulp.task('test', ['jsTest', 'protractor']);

/**
 * Karma Testing Task
 */
gulp.task('jsTest', function (done) {
	new Server({
		configFile: __dirname + '/src/main-site/config/karma.conf.js',
		singleRun: true
	}, done).start();
});

/**
 * Protractor Testing Task
 */
gulp.task('protractor', ['connectTest'], function() {
	return gulp.src(g$.sourceFiles.tests.integration.specs)
		.pipe(angularProtractor({
			'configFile': g$.sourceFiles.tests.integration.configFile,
			'debug': false,
			'autoStartStopServer': true
		}))
		.on('error', function(e) {
			console.log(e);
			connect.serverClose();
		})
		.on('end', function() {
			connect.serverClose();
		});
});

// </editor-fold>

// <editor-fold desc="Vendor Tasks">
// Vendor CSS Task *****************************************************************************************************
gulp.task('vendorJs', ['vendorJsHead', 'vendorCss', 'vendorImg'], () => {

	g$.deleteFiles([g$.build + 'app/js/vendor.min.js']);

	return gulp.src(g$.sourceFiles.vendor.js)
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.init({loadMaps: true})))
		.pipe(concat('vendor.min.js'))
		.pipe(uglify({
			mangle: false,
			comments: 'all'
		}))
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(g$.build + 'app/js'))
		.pipe(gulp.dest(g$.source + '_compiled'))
		.pipe(reloadBrowser());
});

// JS Head Task ********************************************************************************************************
gulp.task('vendorJsHead', () => {

	g$.deleteFiles([g$.build + 'app/js/head.min.js']);

	return gulp.src(g$.sourceFiles.vendor.jsHead)
		.pipe(plumber())
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.init({loadMaps: true})))
		.pipe(concat('head.min.js'))
		.pipe(uglify({
			mangle: false,
			comments: 'all'
		}))
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(g$.build + 'app/js'))
		.pipe(reloadBrowser());
});

// Vendor IMG Task *****************************************************************************************************
gulp.task('vendorImg', () => {

	g$.deleteFiles([g$.build + 'css/images']);

	return gulp.src(g$.sourceFiles.vendor.img)
		.pipe(gulp.dest(g$.build + 'css/images'))
		.pipe(reloadBrowser());
});

// Vendor JS Task ******************************************************************************************************
gulp.task('vendorCss', () => {

	g$.deleteFiles([g$.build + 'app/css/vendor.min.css']);

	return gulp.src(g$.sourceFiles.vendor.css)
		.pipe(plumber())
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.init({loadMaps: true})))
		.pipe(minifyCss())
		.pipe(concat('vendor.min.css'))
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(g$.build + 'app/css'))
		.pipe(reloadBrowser());
});

// Vendor Fonts Task ***************************************************************************************************
gulp.task('fonts', () => {

	g$.deleteFiles([g$.build + 'fonts/*.*']);

	return gulp.src(g$.sourceFiles.fonts)
		.pipe(gulp.dest(g$.build + 'fonts'))
		.pipe(reloadBrowser());
});

// </editor-fold>

// <editor-fold desc="SASS Tasks">
// SASS Task ***********************************************************************************************************
gulp.task('sass', () => {

	// FIXME: need underscore to filter object
	// var filesToCreate = g$.sourceFiles.sass{}.filter('helpers');
	const filesToCreate = [];

	for (const fileName in g$.sourceFiles.sass) {
		if ((fileName !== 'helpers' || fileName !== 'utility' ) && g$.sourceFiles.sass.hasOwnProperty(fileName)) {
			filesToCreate.push(fileName)
		}
	}

	filesToCreate.forEach(function(fileName) {

		g$.deleteFiles([g$.build + 'app/css/' + fileName + '.min.css']);

		return gulp.src(g$.sourceFiles.sass[fileName], {
				base: g$.source
			})
			.pipe(plumber())
			.pipe(gulpif(g$.environment === 'dev', sourcemaps.init()))
			.pipe(gulpSass({
				includePaths: [
					g$.source + 'sass/globals',
					g$.root + 'bourbon',
					g$.root + 'base',
					g$.root + 'neat'
				]
			})).on('error', gulpSass.logError)
			.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
			.pipe(concat(fileName + '.min.css'))
			.pipe(minifyCss({
				advanced: false,
				relativeTo: g$.build + 'app/css',
				target: g$.build + 'app/css'
			}))
			.pipe(gulp.dest(g$.build + 'app/css'));

	});

	reloadBrowser(false);
});
// </editor-fold>

// <editor-fold desc="HTML/Template Tasks">
// ProcessHTML Task ****************************************************************************************************
gulp.task('html', ['jade'], () => {

	return gulp.src(g$.sourceFiles.html, {
			base: g$.source
		})
		.pipe(gulpif(g$.environment === 'production', minifyhtml()))
		.pipe(gulp.dest(g$.build))
		.pipe(reloadBrowser());

});

// JADE Task ***********************************************************************************************************
gulp.task('jade', ['partials'], () => {
	return gulp.src(g$.sourceFiles.jade, {
			base: g$.source
		})
		.pipe(jade())
		.pipe(gulp.dest(g$.build))
		.pipe(reloadBrowser());
});

// Partials Task *******************************************************************************************************
gulp.task('partials', () => {

	g$.deleteFiles([g$.build + 'app/js/partials.min.js']);

	// noinspection JSUnusedGlobalSymbols
  return gulp.src(g$.sourceFiles.partials, {
			base: g$.source
		})
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.init()))
		.pipe(templateCache({
			module: 'myApp',
			filename: 'partials.min.js',
			moduleSystem: 'IIFE',
			transformUrl: function(url) {
				var split = url.split('/');
				return split[split.length - 1];
			}
		}))
		.pipe(uglify({
			comments: 'all'
		}))
		// .pipe(obfuscate({ replaceMethod : obfuscate.ZALGO }))
		.pipe(gulpif(g$.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(g$.source + '_compiled'))
		.pipe(gulp.dest(g$.build + 'app/js'));
});
// </editor-fold>

// <editor-fold desc="Clean and Archive Tasks">
// Clean Build Folder **************************************************************************************************
gulp.task('clean', () => {
	g$.deleteFiles([g$.build + '**/*']);
});

// Clean All Build Folders *********************************************************************************************
gulp.task('clean:all', () => {
	g$.deleteFiles([
		'./_BUILDS/dev/**/*',
		'./_BUILDS/ppe/**/*',
		'./_BUILDS/prod/**/*',
		'./_BUILDS/release/**/*',
		'./_SRC/**/js_compiled',
		'!./_BUILDS/**/.gitignore'
	])
});

// Create Archive ******************************************************************************************************
gulp.task('createArchive', () => {
	return gulp.src()
		.pipe(tar(new Date().getTime() + '.tar'))
		.pipe(gzip())
		.pipe(gulp.dest('releases'));
});

// </editor-fold>
