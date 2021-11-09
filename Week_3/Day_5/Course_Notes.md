# W2D2 OOP FUNdamental Fridays 
# Lecture Notes
_________________
No lecture.

# Course Notes
_________________
## OOP
In OOP terms, the properties in a JS object can be called states and functions are methods

The keyword **this** is a variable which refers to the object that the method was called on. Whenever your method is accessing a property or another method on the same object , use **this**

The primary goals of OOP are:

1. Reduce duplicated code (resuability)
2. Breaking code up into sensibly-divided units (modularity) 

## Class
A class is like the blueprint for an object. 

The name for a class should be a noun with the first letter capitalized.

You can add a method to a class like so,
```javascript
class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}
```
To add a property, use **this** followed by a property name,
```javascript
class SomeClass {
  someMethod(parameter) {
    this.parameter = 'hi';
  }
}
```

## Inheritance
When two classes share identical methods or properties, we can create another class with these properties and inherit them into our subclasses.