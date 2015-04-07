var http        = require('http');

var express     = require('express');
var NodeApp     = express();

var server      = http.createServer(NodeApp).listen(3000);
var io          = require('socket.io').listen(server);

NodeApp.use(express.static(__dirname + '/application'));

io.sockets.on('connection', function(socket){
  console.log("connected");

  socket.emit('connected');
});
