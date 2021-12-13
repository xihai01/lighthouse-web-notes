# W7D1 React States
# Lecture Notes
_________________
No lectures today.

# Course Notes
_________________
## React States
A state in computer science is the defined as its condition regarding stored inputs. A state is the current status of something, such as light that is either on or off.

To store states, we need to import the useState hook into our react project.

```jsx
import React, { useState } from "react";
```

THe useState hook return an array with two related elements. The first element holds the current state of the componenet and the second element is a function that updates this state and renders it again.

```jsx
const [state, setState] = useState();
```

**ALWAYS ENSURE THAT HOOKS ARE NOT INSIDE ANY CONDITIONALS, LOOPS OR OTHER FUNCTIONS!**

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called *“lifting state up”*.

When we create components that override HTML form elements to let react control their state, we call them **controlled components**.

Some of these HTML elements are:
1. ```<input>```
2. ```<textarea>```
3. ```<select>```