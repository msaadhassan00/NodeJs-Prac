const http = require('http');
const fs = require('fs');   

const port = 5000;

http.createServer(function(req, res) {
    // const text = fs.readFileSync('../FileModules/big2.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('../FileModules/big2.txt', 'utf8');
    fileStream.on('open', ()=> {  fileStream.pipe(res); });

    fileStream.on('error', (err)=> {  res.end(err) }); 

}).listen(port);