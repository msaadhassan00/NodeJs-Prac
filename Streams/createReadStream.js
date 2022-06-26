const { createReadStream } = require('fs');

const stream = createReadStream('../FileModules/big2.txt',{encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{ console.log(err); });

// stream.emit('data')