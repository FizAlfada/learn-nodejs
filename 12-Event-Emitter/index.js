const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// on method
// myEmitter.on("event", (name, age) => {
//   console.log(`The name is ${name}, ${age} years old`);
// });

// once method
myEmitter.once("event", (name, age) => {
  console.log(`The name is ${name}, ${age} years old`);
});

myEmitter.emit("event", "John", 16);
myEmitter.emit("event", "Daryl", 24);
myEmitter.emit("event", "Jack", 23);
