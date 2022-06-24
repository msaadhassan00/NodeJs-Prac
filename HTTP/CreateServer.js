const http = require('http');

const port = 5000;

const server = http.createServer((req, res)=>{
   if (req.url === '/') {
    res.end('Welcome to the Home page!');
   }
   else if (req.url === '/about') {  
    res.end('Welcome to the About page!');
   }
   else{

       res.end('ok');
   }
});

server.listen(port);

