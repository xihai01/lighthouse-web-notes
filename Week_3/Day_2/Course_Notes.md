# W2D1 Asynchronous Programming
# Lecture Notes
_________________
## Topics
- Review functions and callbacks...
- Asynchronous control flow
- Break
- Async file read
- Async file printer

## Review Functions and Callbacks
```javascript
const highOrder = function(name, cb) {
  console.log('Name is: ', name);
  console.log('cb is ', cb);
};

highOrder('Vas', fun);
```
Remember in JS, functions are treated like values and so you can pass a function into another function by reference. This function passed in is called a callback.

You can't break out of a forEach() loop. It runs until completion and is one of the limitations of forEach().

## Asynchronous Control Flow
```javascript
setTimeout(function() {
  console.log('hello world');
}, 1000); //1000 ms or 1 sec delay
```
setTimeout(callback, delay) sets some logic aside to execute after a certain delay, but at the same time, JS won't wait and will continue executing other synchronous code.

setTimeout waits until the rest of the main program is finished running before executing no matter what the delay is. The delay starts when we start executing this code - not when we **is it bcreated** it.

We can use setTimeout to print a string slowly
```javascript
setTimeout(() => {
  console.log('H');
}, 300);
setTimeout(() => {
  console.log('e');
}, 600);
setTimeout(() => {
  console.log('l');
}, 900);
setTimeout(() => {
  console.log('l');
}, 1200);
setTimeout(() => {
  console.log('o');
}, 1500);
```
Once in the async queue, all the setTimeout() will start their delay timers. This is way if we don't increase the delay for each letter, then all of the letters will be printed out at the same time.

```javascript
//a way to print out each variable on the same line
process.stdout.write(variable);
```
# Course Notes
_________________
## Event Handling and User Input
Events are actions when users click on a link, button, submit a form..ect. Since these user events can happen anytime when our app is running, we need to be able to handle them asynchronously.

Callbacks are a major way for JavaScript to handle code that needs to run later.

## Asynchronous
Asynchronous functions need callbacks because Node doesn't know when they'll complete. Callbacks provided to those functions are executed once this type of function is finished. Therefore, if we want to do something after that, we need to nest our code within that callback. 

Asynchronous functions need callbacks to return their data; otherwise, due to control flow, their data will get lost if you simply return them like regular functions.