const { readFileSync, writeFileSync, readFile } = require('fs');

// const one = readFileSync('./one.txt','utf8');
// const two = readFileSync('./two.txt','utf8');
// const result = readFileSync('./result.txt','utf8');


// console.log(one,two);

// writeFileSync('./result.txt',`${one} ${two}`)

// console.log(result);

readFile('./result.txt','utf8',(err,res)=>{
    if (err) {
        console.log(err);
        return
    }
    
        console.log(res);
    
})