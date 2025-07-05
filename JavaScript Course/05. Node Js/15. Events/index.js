import EventEmitter from 'events';

// Creating Instance

const customEmitter = new EventEmitter();

// 1. on: listen/register for an event
// 2. once: listen/register for an event (only fire once)
// 3. emit: emit/call an event (this will run registered event using "on" or "once")

customEmitter.once('response', (name, id) => {
    console.log(`user: ${name} id: ${id}`)
})

customEmitter.emit('response', "Abhishek",22);
customEmitter.emit('response', "Ankit",23);
customEmitter.emit('response', "Vicky",22);