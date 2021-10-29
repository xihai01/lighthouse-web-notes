# W1D3 Notes
## Lecture Notes
_________________
### Topics Covered
- Functions as values
- Function calling vs passing (reference to function)
- Callback functions and higher order functions
- Intro to anonymous functions
- Arrow functions
- Make our own higher order function
__________________________________________
can use labels with console.log()

You can store functions in arrays and access them like so:
```javascript
const myFuncs = [addTwo, sayHello];
//calling addTwo()
const result = myFuncs[0](5); //=> const result = addTwo(5) => 7
```
A calback is a function that gets passed to another function to be invoked by the second function.

A higher order function (HOF) is a function that accepts another function as an argument like,
```javascript
const runMe = function(callback) {
  callback('Elise');
} ;
```

## Course Notes
_________________
### Callback Functions
Functions in JS are actually objects.
This means two important things:
1. Functions can be stored in variables and passed around
2. Functions can do everything that other objects can do such as assiging properties to them 
```javascript
const myFn = function() {
  console.log('I am a dunction.');
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute); //=> 42
```
THe most notable usage of having functions as values in JS is a **callback function**
A callback function:
- is a function passed by reference into another function ('called reciever function')
- the reciever function can decide when to call the callback function anytime and as many times it wants to
- can accept multiple arguments as well
```javascript
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
```
### Array forEach
This method is a very useful tool for iterating over arrays and can be used with callbacks. I think forEach is pretty similar to for..of

The syntax is as follows:
```javascript
array.forEach((element, index, ...) => {
  //some logic here
  if (index === 2) {
    someFunction(); //execute some callback function
  }
});
```
forEach goes through every element in the array and executes a provided function.

### Anonymous Functions
Functions passed inline are called anonymous functions because we don't assign them to a variable
```javascript
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
//this is the same as,
const myFn = function(index) {
  console.log("Waldo is located at:", index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], myFn);
```
