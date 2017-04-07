var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });
//
// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });

io.on('connection', function(socket){
    var userName;

    //new connection
    socket.on('user connect', function (user) {
        userName = user.name
        io.emit('user connect', user.name + ' has joined.');
  });
    //disconnection
    socket.on('user disconnect', function (user) {
        io.emit('user disconnect', user.name + ' has disconnected.');
  });
    //chat message
    socket.on('chat message', function(msg){
        io.emit('chat message',userName +": "+ msg);

  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
