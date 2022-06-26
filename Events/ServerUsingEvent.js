const http = require('http');

const port = 5000;

const server = http.createServer();

server.on('request', (req, res) =>{
    res.end('Hello World!');
})

server.listen(port);