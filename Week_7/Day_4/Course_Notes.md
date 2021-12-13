# W7D4 Data Fetching and Other Side Effects
# Lecture Notes
_________________
## Topics
- Rules for hooks
- Pure functions and side effects
- 'useEffect'
- Cleanup
- Dependencies
- _useEffect_Flow

## Rules for hooks
1. hooks must be called on top-level in same-order on every render
2. hools must be callled from within react functions (components and custom hooks)
3. hooks must start with the prefix 'use'

## Pure Function
* return the same result given the same input
* no side effects/dependencies

```js
const addTwo = (num) => {
  const result = num + 2;
  return result;
};
```

useEffect() flow -> React returns the elements to be rendered -> react compares its virtual dom with the browsers dom and update relevant parts -> react cleans up any prev effects -> react executes effects.

All useEffect() are called at least once at every initial render.

To conditionally call useEffect(), we can pass a dependency array to useEffect that holds the state values that will trigger useEffect()
# Course Notes
_________________
