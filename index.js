const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
