# W4D4 Responsive Design
# Lecture Notes
_________________
## Topics
- What is Responsive Design
- Mobile First Design
- SASS intro

Responsive Design Tools:
1. Relative units
2. Mdeia queries
3. Responsive images
4. Font scale
5. Grid layouts

The difference between using em and rem is that em is size relative to its parents font size and rem is the size relative to the root font size.

SASS is a preprocessor. It compiles and returns back a CSS file and gives you the ability to use a coding structure to write CSS.

# Course Notes
_________________
Most layouts used by responsive web pages can be categorized into 5 patterns:
1. Mostly fluid
2. Column drop
3. Layout shifter
4. Tiny tweaks
5. Off canvas

Even though the decisions of which responsive design patterns to use are in the realm of design, which is outside the scope of this code-oriented walkthrough, there are two concepts that you should understand as a developer:

    A “fluid” layout is one that stretches and shrinks to fill the width of the screen.
    A “fixed-width” layout is the opposite: it has the same width regardless of the screen dimensions.

In our example web page, the mobile and tablet versions are fluid, and the desktop version is capped at a fixed-width. Almost all responsive design patterns have similar behavior.

Disable viewport zooming in HTML to ensure web page doesn't zoom out to fit the entire desktop layout on mobile devices.