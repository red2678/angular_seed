exports.config = {
	allScriptsTimeout: 11000,

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: "http://localhost:64040/",

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
