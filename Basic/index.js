console.log('Hello World!');

console.log('------------------------------------------');

const { add, sub, mul, div } = require('./calc')

console.log(add(4,5));
console.log(mul(4,5));
console.log(sub(4,5));
console.log(div(4,5));

console.log('------------------------------------------');

const chk = require('./IfElse');

console.log('------------------------------------------');

require('./Function')