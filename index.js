const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// create tech namespace
const tech = io.of('/tech');

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('message', (msg) => {
    console.log(`message: ${msg}`);

    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`user with socket id ${socket.id} disconnected`);

    io.emit('message', 'user disconnected');
  });
});
