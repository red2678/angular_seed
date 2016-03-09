# Angular Seed App

[TOC]

## Description
This is a seed app for AngularJs applications.

Technologies used:

 1. HTML5
 1. JADE
 1. ES6 (ecmascript 2015)
 1. FlowType
 1. SASS
 1. Gulp
 1. Karma/Jasmine
 1. Protractor

## Deployment

1. Clone repo (follow below steps)
2. Make a new Branch named after the project and issue number
2a. Example: Issue #3245 in main branch and named "Fix login button" would be: "asamain-3245-fix-login-button"
3. Make Changes
4. Create a pull request
5. Merge pull request into DEV
6. Merge pull request into PPE
6. Merge pull request into MASTER

## Style Guides
#### Coding
* We follow the AirBnB best practices and style guidelines for Javascript.
	* [AirBnB Style Guide](https://github.com/airbnb/javascript)
* Best practices and style guidelines for Angular.
	* [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
* Best practices and style guidelines for SASS.
	* [SASS Style Guide](http://sass-lang.com/styleguide)
* Best practices and style guidelines for Protractor.
	* [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)

#### Design
* We follow the Google best practices from the Material Design style guide.
	* [Material Design Style Guide](https://www.google.com/design/spec/material-design/introduction.html)

## 3rd Party Docs
##### Coding
* [Angular Material](https://material.angularjs.org/latest/)
* [AngularJs](https://docs.angularjs.org/api)
* [SASS Docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

##### DevOps
* [Bundler](http://bundler.io/)
* [eslint](http://eslint.org/docs/user-guide/configuring)
* [FlowType](http://flowtype.org/)
* [Git](https://git-scm.com/documentation)
* [Homebrew](http://brew.sh/)
* [NodeJs](https://nodejs.org/documentation/)
* [Ruby](https://www.ruby-lang.org/en/documentation/)
* [Ruby Installer (Windows)](http://rubyinstaller.org/)
* [scss-lint](https://github.com/brigade/scss-lint)

## Development 
*****

#### Branches and Builds
There are two main builds for this project: Development and Production. Each of these builds is produced from a branch of the same name (ex. master/dev === the DEV build). Theses are the only branches that get deployed.

#### Deployment

1. Setup project (follow below [steps](#setup)).
1. Make a new Branch named after the project and issue number.
	1. Example: Issue #3245 in red2678/angular_seed Main and named "Fix login button" would be: "asafe-3245-fix-login-button".
1. Make Changes and include a description.
1. Create a pull request and get it approved.
1. Merge pull request into DEV.
1. Merge pull request into MASTER.

#### IDE Configuration

##### IntelliJ IDEA 15.x
###### Configuring FlowType
1. Open settings
	1. Click on `IntelliJ IDEA` from the top menu.
	1. Click `Preferences`.
	1. In the settings window on the left-hand menu, click `Languages and Frameworks`.
	1. Click `Javascript`.
	1. In the right-hand pane, from the dropdown labeled `JavaScript Language Version` select `flow`.
	1. _[**View Image**](http://imgur.com/auP6068)_

###### Configuring Gulp Tasks


###### The NPM and Gulp Toolbars

#### Project Configuration - WINDOWS
Windows instructions coming soon!! 
 
#### Project Configuration - MAC
The below instructions are for **Macintosh**.

##### 1. Install Ruby
1. Ruby comes pre-installed on most Mac distributions, use the below steps only **if necessary**.
	1. Download and run the installer for your system.
		* [Ruby Installer](https://www.ruby-lang.org/en/)
	1. **Recommended**, use the Ruby Version Manager (RVM) to manage Ruby versions on your machine.
		* [Ruby Version Manager](https://rvm.io/)

##### 2. Install [NodeJs](https://nodejs.org/en/) and [FlowType](http://flowtype.org/) with [Homebrew](http://brew.sh/)
1. Working from your user root `cd ~/`.
1. Install Homebrew.
	1. `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. Install NodeJs **4.x LTS** and FlowType with Homebrew.
	1. `brew install node4-lts`
		* If the above command fails, try `brew install homebrew/versions/node4-lts`
	1. `brew install flow`
		* For instructions on configuring FlowType [see here](#markdown-header-configuring-flowtype).
1. Install a few NodeJs global dependencies. **NOTE** you do not need `SUDO` here, thanks Homebrew ;)
	1. `npm install -g gulp`
	1. `npm install -g bower`
	1. `npm install -g babel-cli`
	1. `npm install -g npm-check-updates`

##### 3. Install [Bundler](http://bundler.io/)
1. Working from your user root `cd ~/`.
1. `gem install bundler`

##### 4. Install Git
1. Go to main Git website [https://git-scm.com/](https://git-scm.com/), and download the installer, then run it.
	* *Note:* _Based on your operating system, the download link on the home page will serve up the appropriate installer._

##### 5. Cloning Repo
This will determine your your project root.

###### Using the [Git CLI](https://git-scm.com/doc)
1. Open a Terminal and navigate to where you wish to store the project *(the below is an example, using SSH)*.
1. `cd ~/workspaces`
1. `git clone https://github.com/red2678/angular_seed.git`
1. `cd angular_seed`

###### Using SourceTree
1. Link to sub page with screen shots :: needs to be done

##### 6. Init Project
1. Working from your project root run `npm run initapp`

##### 7. Start Developing
To start developing, execute the `gulp` default task.

1. The `gulp` default task will do several things
	1. Builds project from `src/main-site/` for the `dev` environment to `builds/dev/main-site`.
	1. Runs site in web browser with [gulp-connect](https://www.npmjs.com/package/gulp-connect) with live reload support.
	1. Runs gulp watchers.
1. Open `http://localhost:60431` in your web browser.

*See the Gulp section for more detailed information about the Gulp tasks for this project.*

#### Third-party Libraries 

Third-party libraries are downloaded and managed by *bower*, *npm* and *bundler*. They **should not** be committed into the repository.

* `npm initapp` will automatically download any third-party libraries.
* You can use `ncu` to check node dependencies and `ncu -m` to check bower dependencies.
 	* **WARNING** If you run suggested commands, output by the above command, `ncu -u` or `ncu -m -u` this updates the actual *bower.json* or *package.json* with the latest version number for the packages. Only do this if you really mean it :) 
* You can use `bundle outdated` to check Ruby Gem dependencies via bundler.

#### Unit and e2e Testing
We are using Jasmine/Karma for unit and Protractor for e2e.

- `gulp protractor`
- `gulp jsTest`

## Gulp
### Config
We are using [gConfig](https://www.npmjs.com/package/gconfig) as a configuration helper.

### Grouped Tasks
Below are the "main" or grouped tasks that you will use primarily.

#### `default`
* `gulp` - Runs the following tasks:
	* [clean](#markdown-header-babel)
	* [loadConfig](#markdown-header-loadconfig)
	* [sass](#markdown-header-sass)
	* [js](#markdown-header-js)
	* [html](#markdown-header-html)
	* [jade](#markdown-header-jade)
	* [copy](#markdown-header-copy)
	* [vendorJs](#markdown-header-vendorjs)
	* [fonts](#markdown-header-fonts)
	* [jsDoc](#markdown-header-jsdoc)
	* [connect](#markdown-header-connect)
	* [watch](#markdown-header-watch)
	
#### `build`
* `gulp build` - Runs the following tasks:
	* [clean](#markdown-header-babel)
	* [loadConfig](#markdown-header-loadconfig)
	* [sass](#markdown-header-sass)
	* [js](#markdown-header-js)
	* [html](#markdown-header-html)
	* [jade](#markdown-header-jade)
	* [copy](#markdown-header-copy)
	* [vendorJs](#markdown-header-vendorjs)
	* [fonts](#markdown-header-fonts)
	* [jsDoc](#markdown-header-jsdoc)

#### `watch`
`gulp watch` - Sets up Gulp watcher tasks for the source files, see `gulpfile.babel.js` and specifically the `watch` task for more information on what is being watched.  

### Individual Tasks

#### Build Tasks
****

##### `connect`
##### `connectTest`
##### `copy`
##### `createArchive`
##### `loadConfig`
Loads the Gulp configuration from `src/main-site/config/gulp.conf.js`. 
##### `produceArtifacts`
##### `turnOffLiveReload`

#### Clean Tasks
****

##### `clean`
Cleans the current build folder
##### `clean:all`
Cleans all build folders

#### JS Tasks
****

##### `babel` 
Compiles all `*.es6` files

##### `js`
Takes complied JS, uglfies and concats it into `main.min.js`.

##### `jsDoc`
##### `jsLint`

#### Testing Tasks
****

##### `jsTest`
##### `protractor`
##### `test`

#### Vendor Tasks
****

##### `fonts`
##### `vendorCss`
##### `vendorImg`
##### `vendorJs`
##### `vendorJsHead`

#### HTML Tasks
****

##### `html` 
##### `jade`
##### `partials`

#### SASS Tasks
****

##### `sass`
Main SASS to CSS processing task.
