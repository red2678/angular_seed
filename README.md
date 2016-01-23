# Angular Seed App

## TOC
* [Description](#description)
* [Deployment](#Deployment)
* [Style Guides](#style-guides)

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

#### Design 


## Code
#### Best Practices and Styles Guides
* We follow the AirBnB best practices and style guidelines for Javascript [AirBnB Style Guide]([https://github.com/airbnb/javascript](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml))
* Best practices and style guidelines for Angular [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
* Best practices and style guidelines for SASS [SASS Style Guide](http://sass-lang.com/styleguide)
* Best practices and style guidelines for Protractor [Protractor Style Guide](https://github.com/CarmenPopoviciu/protractor-styleguide)
## Docs
##### Devops
* NodeJs [NodeJs Docs](https://nodejs.org/documentation/)
* Ruby [Ruby Docs](https://www.ruby-lang.org/en/documentation/)
* Ruby Installer (Windows) [Ruby Installer](http://rubyinstaller.org/)
* Git [Git Version Control](https://git-scm.com/documentation)
* SASS (scss) [SASS Docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
* scss-lint [SASS Linter](https://github.com/brigade/scss-lint)
* eslint [JS Linter](http://eslint.org/docs/user-guide/configuring)

##### Libraries
* [AngularJs](https://docs.angularjs.org/api)
* [Angular Material](https://material.angularjs.org/latest/)

## Project Configuration

1. Install Ruby:
	* Windows:
		1. Install the [Ruby Windows Installer](http://rubyinstaller.org/)
	* Mac:
		1. Ruby comes pre-installed on Macs and many Linux distributions. 
		1. **If necessary**, use the correct installer for your system - [Ruby Installer](http://nodejs.org/)

1. Install [NodeJs](https://nodejs.org/en/) with Homebrew
	* Working from your user root `cd ~/`
	* Install Homebrew 
		1. `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
	* Install NodeJs **4.x LTS** and [FlowType](http://flowtype.org/) with Homebrew
		1. `brew install node4-lts`
			* Verify node version `node -v` should be **4.x.x**
		1. `brew install flow`
	* Install a few NodeJs global dependencies. **NOTE** you do not need `SUDO` here, thanks Homebrew ;)
	    1. `npm install -g gulp bower babel-cli npm-check-updates`

1. Install [Bundler](http://bundler.io/)
	1. Working from your user root `cd ~/`
	1. `gem install bundler`

1. Install [Git](https://git-scm.com/) if needed 
	* Windows, Mac & Linux:
		1. Download the installer [Git Installer](https://git-scm.com/download/)

1. Clone the repo to your local environment
	1. `git checkout`

1. Run `npm run initapp'

1. Start developing by executing the `gulp` default task
	1. The `gulp` default task will do several things:
	

*See the Gulp section for more information about Gulp tasks.*

## Development 

#### Bower

Any Third-party javascript libraries will be downloaded and managed by [bower](http://bower.io/). They *should not* by committed into the repository.

`npm install` will automatically download any third-party library that has not already been installed.

Please see the [bower documentation](https://github.com/bower/bower) for information on bower, such as how to install new libraries or upgrade existing ones.

#### Introducing Test Dependencies


## Gulp

Below are the "main" tasks that you will use primarily.

#### Main Tasks



===========

View the Dev build at http://localhost:64031
