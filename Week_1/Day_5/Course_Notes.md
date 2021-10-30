# W1D5 FUNdamental Fridays 🎉🎉🎉
## Lecture Notes
_________________

## Course Notes
_________________
### Object Methods and 'this'
```javascript
const person = {
  firstName: 'Bob',
  lastName:  'Smith',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Nice, now I can just say:
console.log('Hello, ' + person.fullName());
// And it's much "cleaner" every time I need their full name!
```
Functions as proerties of objects are called methods.

**this** refers to the object the method (function) was called on. In this example, we called fullName on the object referred to by the variable person and so **this** refers to that person object.
