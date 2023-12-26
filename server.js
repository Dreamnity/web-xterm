const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'term.html'));
  });
app.get('/dep/*', (req, res) => {
    res.sendFile(join(__dirname,'node_modules', req.url.substr(4)));
  });

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});