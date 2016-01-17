# sbfoodguide.com

## TOC
* [Description](#description)
* [Branches and Builds](#branches-and-builds)
* [Deployment](#Deployment)
* [Style Guides](#style-guides)

## Description
Main repo for the tagglish.com site.

## Branches and Builds
There are three main builds for this project: Development, PPE (pre-production environment) and Production. Each of 
these builds is produced from a branch of the same name (ex. master/ppe === the PPE build). Theses are the only branches 
that get deployed.

## Deployment

1. Clone repo (follow below steps)
2. Make a new Branch named after the project and issue number
2a. Example: Issue #3245 in Tagglish Main and named "Fix login button" would be: "tgmain-3245-fix-login-button"
3. Make Changes
4. Create a pull request
5. Merge pull request into DEV
6. Merge pull request into PPE
6. Merge pull request into MASTER

## Style Guides

#### Design
* Best practices and style guidelines for Tagglish [Frontify Style Guide](https://app.frontify.com/document/2969)

## Code
#### Best Practices and Styles Guides
* We follow the AirBnB best practices and style guidelines for Javascript [AirBnB Style Guide]([https://github.com/airbnb/javascript](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml))
* Best practices and style guidelines for Angular [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
* Best practices and style guidelines for SASS [Marionette Style Guide]()
* Best practices and style guidelines for Protractor [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)
## Docs
##### Devops
* NodeJs [NodeJs Docs](https://nodejs.org/documentation/)
* Ruby [Ruby Docs](https://www.ruby-lang.org/en/documentation/)
* Ruby Installer (Windows) [Ruby Installer](http://rubyinstaller.org/)
* Vagrant - (Windows & Mac) [https://www.vagrantup.com/downloads.html]
* Git [Git Version Control](https://git-scm.com/documentation)
* SASS (scss) [SASS Docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
* scss-lint [SASS Linter](https://github.com/brigade/scss-lint)
* eslint [JS Linter](http://eslint.org/docs/user-guide/configuring)

##### Libraries
* Parse.com - JS SDK [Parse JS SDK Docs](https://parse.com/docs/js/api/)
* Parse.com - Dev Guide [Parse JS Guide ](https://parse.com/docs/js/guide)
* BackboneJs [Parse Docs](http://backbonejs.org/)
* MarionetteJs [Parse Docs](http://marionettejs.com/docs/current/)

## Project Configuration

1. Install Ruby:
	* Windows:
		1. Install the [Ruby Windows Installer](http://rubyinstaller.org/)
	* Mac & Linux
		1. Ruby comes pre-installed on Macs and many Linux distributions. 
		1. **If necessary**, use the correct installer for your system - [Ruby Installer](http://nodejs.org/)

1. Install [NodeJs](https://nodejs.org/en/) with [Homebrew](http://brew.sh/)
	* Working from your user root `cd ~/`
	* Install Homebrew 
		1. `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
	* Install NodeJs **4.x LTS** and [FlowType](http://flowtype.org/) with Homebrew
		1. `brew install node4-lts`
			* Verify node version `node -v` should be **4.2.2**
		1. `brew install flow`
	* Install a few NodeJs global dependencies. **NOTE** you do not need `SUDO` here, thanks Homebrew ;)
	    1. `npm install -g gulp bower babel-cli npm-check-updates`

1. Install [Bundler](http://bundler.io/)
	1. Working from your user root `cd ~/`
	1. `gem install bundler`

1. Install [Git](https://git-scm.com/)

1. Install [Vagrant] (https://www.vagrantup.com/downloads.html)

1. Clone the repo to your local environment
	1. `git checkout`

1. From your projects root download required GEMs using bundler
	1. `bundle install`

1. From your projects root download node and [bower](http://bower.io/) dependencies using node:
	1. `npm install`
         
1. Start up the Vagrant Machine
	1. `cd "_VAGRANT"`
	1. `vagrant up`

1. Start developing by executing the `gulp` default task
	1. The `gulp` default task will do several things:
		1. Prepares CSS and JS files (less, concat, uglify).
		1. Opens style guide page in web browser with [livereload](http://livereload.com/) support.
		1. Runs gulp watch so that any change to JS or LESS files will update `main.min.js` and `main.min.css`.
		1. Open 'index.html' in your web browser. Note: Use this plugin to live reload changes: [Live Reload Plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
	1. See the Gulp section for more information about Gulp tasks.

## Development 

#### Bower

Third-party javascript libraries are downloaded and managed by [bower](http://bower.io/). They *should not* by committed into the repository.

`npm install` will automatically download any third-party library that has not already been installed. This must be done when the project is first checked out, or if libraries have been installed or upgraded since the last time `npm install` has been run.

Please see the [bower documentation](https://github.com/bower/bower) for information on bower, such as how to install new libraries or upgrade existing ones.

#### Introducing Test Dependencies

If the package is an Angular module that requires app.js to be modified then you must:

- Add the script in all HTML files
- Update the karma.conf.js to include the new dependency

## Gulp

Below are the "main" tasks that you will use primarily.

#### Main Tasks

##### `default`

The *default* task will simply run the following tasks:

1. 'js'
2. 'jsLibs'
3. 'less'

##### `test`

Runs the `default` task and the `jsTest` task.

##### `run`

Runs the `default` task and the `connect` task.

##### `dev`

Runs the `default` task, the `jsTest`, the `connect` task and `watch` task.

#### Helper Tasks

##### `jsPublic`
Generates the public javascript file `public.combined.js`

##### `jsPj`
Generates the main PJ javascript file `pj.combined.js`

##### `js`
First runs the `jsPj` and `jsPublic`, then generates the main VT javascript file `vt.combined.js`

##### `jsLibs`
Generates the main PJ javascript file `vendor.js`

##### `jsTest`
Runs [jshint](http://www.jshint.com/), [JavaScript Code Style](https://www.npmjs.org/package/jscs) and [Karma](http://karma-runner.github.io/0.12/index.html) unit tests.

##### `less`
Generates CSS from less and places it in the same DIR as the less it is generated from (in a folded named CSS). It then combines the stream
into a single CSS file `pj.combined.css`

##### `connect`
Starts up [gulp-connect](https://www.npmjs.com/package/gulp-connect) localhost port 9000 with livereload support to automatically reload browser whenever there is a change to an HTML, JS, or LESS file.

##### `reload`
Calls `connect.reload()` to refresh the gulp-connect server

##### `watch`
Sets up Gulp watcher tasks for the source files

===========

View the Dev build at http://dev.tagglishtest.com
