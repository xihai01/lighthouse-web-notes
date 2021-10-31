# W1 WEEKEND 🎉🎉🎉
# Lecture Notes
_________________
No lecture on weekends
# Course Notes
_________________
## Module
Every file in Node is a module or every file run by node has access to the **module** object. We can check this object like so,

Create a new file, and write in,
```javascript
console.log(module);
```
Run node [filename.js] in terminal and you will see module contains information about that file.
```javascript
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/superman/codes/moduleCheck.js',
  loaded: false,
  children: [],
  paths: [ ... ] 
}
```
To use a function from a different file, we need to first export it and then import it (aka -require) into our current file.

To export functions, add this in to the file where the function exists
```javascript
module.exports = [/*function name*/] 
```
Since each file in node has their own module object, we need to populate the export property of the module object with the function.

To import functions, we need to add this to the file we want to use that function,
```javascript
const [/*function name*/] = require(/*relative path*/);
//for example: if we have funcLibrary.js in the same directory 
const someFunc = require('./funcLibrary');
```
## Packages and NPM
Packages are self-containted code libraries that we can install and use in our projects. Like for example, if we want to add additional functionality to node.

To install a package, run:
```
npm install chalk
```
package.json file:
```javascript
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Short project summary",
  "main": "index.js",
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.13.4"
  }
}
```
The dependencies section of the package.json file lists the packages that need to be installed for the project to run properly.

package-lock.json file lists all the details about our project's dependencies. It should be checked into git along with package.json

However, the node_modules directory is gitignored because package.json will recreate the node_modules directory

**Avoid editing the package-lock.json file directly. To modify it, we should always run npm install**

## Automated Testing
**Unit Testing** is the practice of writing code for small, isolated functions to test them. Usually a test is written for each function. This type of testing not only allows you to pinpoint specific bugs, but can help you write better code.

**Integration Testing** is more complex than unit tests because they test how parts of a system works together. For example, when writing tests to verify the front-end works with the back-end.

**Functional Testing** is defined as the testing of complete functionality of some application. For example, if you want to test a certain flow of your web page, such as registering an account, you can automate it with functional testing. In general, functional testing is complex and hard to maintain so you should have only a few of these tests.

**Takewaway**: ALways write as much of unit tests you can before jumping into Integration and/or Functional testing.