# W4D1 Intro to CSS
# Lecture Notes
_________________
# Topics
- HTML
- CSS
- Dev tools
- Box model and Box sizing
- Intro to flexbox

In terms of CSS specifity, elements < classes < id's

Box sizing => use border-box so that the margin and padding is included in width and height calculations,
```css
* {
  box-sizing: border-box;
}
```
To link external CSS files,
```html
<link rel="stylesheet" href="relative path" />
```
# Course Notes
_________________
## Flexbox
A **block** element will take up the entire space of the parent element. It can contain other block or inline elements. Examples are div and p.

An **inline** element do not start a new line when they are rendered in the browser. They will only take as much space as the content needs. Unlike block elements, we cannot add a width, height, padding ot margin to inline elements. Examples are span and anchor tags.

A **inline-block** element has properties of both block and inline. These elements don't start on a new line and you can change properties such as width, padding, margin ...etc. Examples are image and button tags.

