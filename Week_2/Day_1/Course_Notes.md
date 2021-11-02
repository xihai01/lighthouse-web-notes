# W2D1 TDD with Mocha and Chai
# Lecture Notes
_________________
## Topics
- Practicing unit testing with TDD
- Using the Mocha BDD test framework
- Using the Chai assertion library
- Creating and consuming modules using Node (module.exports and require)

Automated testing is the practice of writing code to programmatically test the actual code we want to write.

TDD or Test Driven Development is when you write the tests first before coding 

**Try Catch** handles errors gracefully in JS. It ensures your program doesn't exit or crash all of a sudden when a non-harmful error is found.
```javascript
try {
  //what we need to execute
} catch (error) {
  //Executes if an error is thrown
}
```
The error object will hold the error that was thrown so later you can access it through its properties.

The main goal of automated testing is to improve overall code quailty.

Mocha is the testing framework and Chai is the assertion library
# Course Notes
_________________
## Asynchronous Programming
Asynchronous programming is when a unit of work is run separately from the main thread of the program and notifies the program of its completion. Asynchronous code can run independently from the rest of the program since the main program doesn't depend on the result of the asynchronous code.