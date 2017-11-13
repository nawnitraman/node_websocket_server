var express = require('express');
var socket = require('socket.io');


// App setup
var app = express();
var server = app.listen(process.env.PORT || 4000, function() {
  console.log('listening for requests on port 4000');
});


// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



io.on('connection', function(socket) {
  // passed in socket refers to individual socket that is connected
  console.log('made socket connection', socket.id);

});



setInterval(function(){
  //console.log(getRandomInt(5,15));
  io.sockets.emit('memory', {
      os:getRandomInt(20,30),
      sqlserver:getRandomInt(30,40),
      chrome:getRandomInt(20,40),
      free:getRandomInt(30,40)
  });
}, getRandomInt(3000,5000));

setInterval(function(){
  //console.log(getRandomInt(5,15));
  io.sockets.emit('cpu', {
    os:getRandomInt(20,40),
    sqlserver:getRandomInt(10,20),
    chrome:getRandomInt(50,70),
    free:getRandomInt(30,40)
  });
}, getRandomInt(3000,5000));

setInterval(function(){
  //console.log(getRandomInt(5,15));
  io.sockets.emit('diskspace', {
    os:getRandomInt(30,40),
    sqlserver:getRandomInt(20,40),
    chrome:getRandomInt(40,50),
    free:getRandomInt(10,20)
  });
}, getRandomInt(3000,5000));












// when a client makes a connection
// io.on('connection', function(socket) {
//   // passed in socket refers to individual socket that is connected
//   console.log('made socket connection', socket.id);
//   setInterval(function(){
//     console.log(getRandomInt(5,15));
//     io.sockets.emit('chat', {
//       message: getRandomInt(100,200),
//       handle: getRandomInt(125,325),
//       memory:{
//         os:getRandomInt(0,100),
//         sqlserver:getRandomInt(0,100),
//         chrome:getRandomInt(0,100),
//         free:getRandomInt(0,100)
//       },
//       cpu:{
//         os:getRandomInt(0,100),
//         sqlserver:getRandomInt(0,100),
//         chrome:getRandomInt(0,100),
//         free:getRandomInt(0,100)
//       },
//       diskspace:{
//         os:getRandomInt(0,100),
//         sqlserver:getRandomInt(0,100),
//         chrome:getRandomInt(0,100),
//         free:getRandomInt(0,100)
//       }
//     });
//   }, 3000);
//
//   // when we recieve a 'chat' data from the individual
//   socket.on('chat', function(data) {
//     // send a 'chat' data to ALL of the connected sockets
//     io.sockets.emit('chat', data);
//   })
//
//   socket.on('typing', function(data) {
//     // emit to every other single client
//     socket.broadcast.emit('typing', data);
//   })
// })
