# W4D2 Client Side JS and jQuery
# Lecture Notes
_________________
## Topics
- Browser Object Model (BOM)
- DOM
- Manipulating DOM with JS
- Manipulating DOM with jQuery

The BOM is a hierarchy of browser objects that are used to manipulate browser objects such as window and document.

So the BOM is higher in level than the DOM. For example, the DOM can be accessed by window.document in the BOM.

Before manipulating the DOM, we need to make sure its fully loaded,
```javascript
$(document).ready(function() {

});
```

# Course Notes
_________________
## DOM
When an event happens, an object is created that contains information about the event and is automatically passed along into the callback function.
