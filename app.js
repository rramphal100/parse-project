var dotenv = require('dotenv').config();
var commander = require('commander');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = require('express')();

var allowInsecureHTTP = !process.env.NODE_ENV == 'production' || false;

commander
	.version('1.0.0')
	.usage('[options]')
	.option('--dburl', 'Database URL')
	.option('--masterkey', 'Parse Master Key')
	.option('--appid', 'Parse App ID')
	.option('--parseurl', 'Parse Server URL')
	.option('--appname', 'Parse Server App Name (appears on Parse dashboard)')
	.parse(process.argv);

var parse = new ParseServer({
  databaseURI: commander.dburl || process.env.DATABASE_URL || 'mongodb://localhost:27017/', // Connection string for your MongoDB database
  //cloud: '/cloud/main.js', // Absolute path to your Cloud Code
  appId: commander.appid || process.env.PARSE_APP_ID || 'devserver1',
  masterKey: commander.masterkey || process.env.PARSE_MASTER_KEY || 'oanvAWrvaRVaFVASERAdfBSdfBSRTsrteYnSTbserVS', // Keep this key secret!
  //fileKey: 'optionalFileKey',
  serverURL: commander.parseurl || process.env.PARSE_SERVER_URL || 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

var dashboard = new ParseDashboard({
	"apps": [
			{	
				"serverURL": commander.parseurl || process.env.PARSE_SERVER_URL || "http://localhost:1337/parse",
				"appId": commander.appid || process.env.PARSE_APP_ID || "devserver1",
				"masterKey": commander.masterkey || process.env.PARSE_MASTER_KEY || "oanvAWrvaRVaFVASERAdfBSdfBSRTsrteYnSTbserVS",
				"appName": commander.appname || process.env.PARSE_APP_NAME || "dev1"
			}
		]
}, allowInsecureHTTP);

// Serve the Parse API on the /parse URL prefix
app.use('/parse', parse);

// Serve the Parse Dashboard on the /dashboard URL prefix
app.use('/dashboard', dashboard);

app.listen(1337, function() {
  console.log('Ryan\'s Parse Project running on port 1337.')
});
