# W1D2 Notes
## Lecture Notes
_________________
### Topics
* Curriculum overview
* Writing code icrementally
* Problem solving tips
* Basic git workflow (init -> add -> commit -> push)

### Details
How to work iteratively and incrementally. How to debug. How to manually test your code. Writing clean code (DRY).

git remote -v => checks the repository linked to

git remote rm origin => removes the repository link

### Incremental Development
How to approach problem solving:

- List the steps to solve the problem. Don't think about syntax

### Difference between Number() and parseInt()
Number() evaluates the whole expression and tries to convert it into a number. 

parseInt() extracts the first integer from an expression.

```javascript
let exp = '5hello';
console.log(Number(exp); //prints 'NaN' to console
console.log(parseInt(exp)); //prints '5' to console
```

### Additional Stuff
Can use modulo or isInteger() to check if a number is whole
```javascript
num % 1 === 0;
//or
Number.isInteger(num);
```
Stops program execution and returns nothing to console

```javascript
process.exit();
``` 

## Course Notes
______________________________
### Pair Programming
Pair programming is an agile software development technique in which two people sit at together to code together. The two roles are:
* Driver - writes the code
* Navigator -> reviews/suggests ideas to make further improvements to code

When being a driver, you need to talk through your code while you are typing it out. **Communication** in pair programming is key!

### Functions Best Practices
1. Give your functions precise verb/action based names
2. camelCasing for function names
3. Properly indent code
4. Functions should be focused on a single task. Break your function into multiple smaller functions if you find it doing two or more things
5. Functions should try avoid reading global variables. Instead, pass the variable in as a parameter

### List of Falsy Values
```javascript
// All of the following are inherently falsey:

False
// False is False. Makes sense, right?

0
// 0 is the only falsey Number

""
// an empty string is falsey

null
// a null, or empty value, is falsey.

undefined
// an object that has not been defined is considered falsey.

NaN
// Not a Number. You'll learn more about NaN as we go on.
```