const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// will i ACTUALLY have a WORKING server that RUNS??!!
app.use(express.static('.')); // static files from root

io.on('connection', (socket) => {
    console.log('{!dev!} - new user connected!');

    socket.on('message', (msg) => {
        io.emit('message', msg); // show off your amazing message with totally not any racial slurs /j
    });

    socket.on('disconnect', () => {
        console.log('{!dev!} - a user disconnected. :(');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`{!dev!} - server is running on http://localhost:${PORT}`);
});
