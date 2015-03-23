/*
* IMPORTANT:
* restart the server after any change made in this file (files in /application folder only needs to refresh the browser)
* run the server with the command line/terminal going to the directory and type: node http_server.js
* for restarting the server press Ctrl+C in command line and run the server again with: node http_server.js
*/

var http        = require('http');

/*
* if an error is present in the command line/terminal when running the server please do the following:
* run in command line/terminal: npm install express
*/
var express     = require('express');
var NodeApp     = express();

// once the server is up and running go to the browser and type: http://localhost:3000
var server      = http.createServer(NodeApp).listen(3000);

// put the index.html in the proper path, in this case inside /application folder
NodeApp.use(express.static(__dirname + '/application'));
