const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
    console.log(`response received with user ${name} and id: ${id}`);
});

customEmitter.on('response', () => {
    console.log('another response received');
});


customEmitter.emit('response','jhon',28);
