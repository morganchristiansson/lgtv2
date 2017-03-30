#!/usr/bin/nodejs

var cmd = process.argv[2];
var hosts = process.argv.slice(3);

var new_lgtv = require("lgtv2");

hosts.forEach(function (host) {
	switch(cmd) {
	case 'off':
		var lgtv = new_lgtv({url: "ws://"+host+":3000"});
		lgtv.on('connect', function() {
			console.log(host+" connected, turning off");
			lgtv.request('ssap://system/turnOff');
		});
		break;

	default:
		console.log("Unsupported command: "+cmd);
		// lgtv.request('ssap://system.notifications/createToast', {message: 'Morgan now controls all TVs '+ host});
		// lgtv.request('ssap://system.launcher/open',
		// 	{target: 'http://10.1.0.117:9400/'}
		// );
		break;
	}
});
