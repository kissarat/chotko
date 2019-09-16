const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    window.addEventListener('scroll', () => {

    });
    client.on('scroll', data => {
    });
    client.on('disconnect', () => {
    });
});
server.listen(3000);
