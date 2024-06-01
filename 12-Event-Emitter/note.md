## Event

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the `EventEmitter` class. These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the `EventEmitter` object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded.

The following example shows a simple `EventEmitter` instance with a single listener. The `eventEmitter.on()` method is used to register listeners, while the `eventEmitter.emit()` method is used to trigger the event.

```js
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
```

### on

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

```js
// on method
myEmitter.on("nameEvent", (name, age) => {
  console.log(`The name is ${name}, ${age} years old`);
});
```

Returns a reference to the EventEmitter, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The emitter.prependListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.

```js
const EventEmitter = require("node:events");
const myEvent = new EventEmitter();
myEvent.on("foo", () => console.log("a"));
myEvent.prependListener("foo", () => console.log("b"));
myEvent.emit("foo");
// Prints:
//   b
//   a
```

### once

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

```js
// once method
myEmitter.once("event", (name, age) => {
  console.log(`The name is ${name}, ${age} years old`);
});
```

Returns a reference to the EventEmitter, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The emitter.prependOnceListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.

```js
const EventEmitter = require("node:events");
const myEE = new EventEmitter();
myEE.once("foo", () => console.log("a"));
myEE.prependOnceListener("foo", () => console.log("b"));
myEE.emit("foo");
// Prints:
//   b
//   a
```
