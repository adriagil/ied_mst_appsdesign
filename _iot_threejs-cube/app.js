var http        = require('http');

var express     = require('express');
var NodeApp     = express();

var serialport  = require("serialport");
var SerialPort  = serialport.SerialPort;

var server      = http.createServer(NodeApp).listen(3000);
var io          = require('socket.io').listen(server);

NodeApp.use(express.static(__dirname + '/public'));

var sp = new SerialPort("/dev/tty.usbmodem1431", {
  parser: serialport.parsers.readline("\n"),
  baudrate: 9600
});
sp.on('open', function(){
  console.log("Serial Port open");

  io.sockets.on('connection', function(socket){
    socket.emit('connected');

    sp.on('data', function(data){
      console.log(data.toString());

      socket.emit('data', data.toString());
    });

  });

});
