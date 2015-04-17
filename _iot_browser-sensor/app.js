var http        = require('http');

var express     = require('express');
var NodeApp     = express();

var server      = http.createServer(NodeApp).listen(3000);

NodeApp.use(express.static(__dirname + '/public'));
