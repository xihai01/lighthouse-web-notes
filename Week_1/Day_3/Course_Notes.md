# W1D3 Notes
## Lecture Notes
_________________
### Objectives
* primitive data types review
* objects
* passing primitives and objects to functions
* function as object methods
* what is **this**
* object iteration with for...in loops

[Link to lecture notes on github](https://github.com/jcbain/west_2021-09-13/tree/main/w01d03_objects)

### Primitives
Data structures such as arrays and objects are always truthy values even if they are empty.

### Objects
Objects represent key-vaue pairs. These key-value pairs are unordered.

*Objects v.s Arrays*
_______________________
Use objects when describing properties of something, like a mug
```javascript
const someMug = {
  color: 'blue',
  capacity: '400ml',
  material: 'ceramic',
  price: 'free'
}
```
However, say if we have a list of materials the mug is made of, then we should use an array
```javascript
const someMug = {
  color: 'blue',
  capacity: '400ml',
  materials: ['ceramic', 'copper', 'rubber'],
  price: 'free'
}
```
The two different ways to access object properties is bracket notation and dot notation.
```javascript
... let result = objectName[key];
```
```javascript
... let result = objectName.key;
```

The . notation way takes the name of the key literally and there are some special rules like you can't use spaces in the key name..ect

. notation is used when you know exactly the name of the key you want to access.

[] notation is used when you don't exactly know what key you want like if you are looping through a list of keys.

### Object Methods
```javascript
const anotherFunction = function() {

};

object = {
  ....
  someFunction: function (para) {
    ....
  },
  someOtherFunction: anotherFunction
  ....
}
```
Can access object method using both . and [] notations.
```javascript
object.someFunction(arg);
object['someFunction'](arg);
```

## Course Notes
_________________
### The Six Primitive Types in JS
*In JS, all values which are not objects are referred to as primitives*
1. undefined
2. null
3. boolean
4. string
5. number
6. symbol (introduced in ES6)
7. bigint (introduced in ES6)

*The six primitives plus object make up the seven fundamental types in JS*

### Iterating over Objects
We use a for..in loop to iterate over key-pairs in objects since objects are not iterable in the sense arrays are.
```javascript
for (const key in object) {
  console.log(object[key]);
}
```