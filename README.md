# Introduction
[freeCodeCamp](https://learn.freecodecamp.org/) teaches you the fundamentals and beyond of web development in bite-sized lessons. I created this after completing each exercise to create a personal cheetsheet of snippets to reference topics that I've learned. This will likely not be useful to you unless you already know how to code. If you don't know how, well you're in luck and can start at freeCodeCamp!

<a name="home"/>

# Table of Contents

## Responsive Web Design Certification

[Basic HTML](#basic-html)

* [Comment HTML](#rwd-html-comment)
* [Adding Images](#rwd-html-images)
* [Create a Bulleted List](#rwd-html-unordered-list)
* [Create an Ordered List](#rwd-html-ordered-list)
* [Create a Text Field](#rwd-html-text-field)
* [Add Placeholder Text to a Text Field](#rwd-html-text-field-placeholder)
* [Create a Form Element](#rwd-html-form)
* [Add a Submit Button](#rwd-html-submit)
* [Create Radio Buttons](#rwd-html-radio)
* [Create CheckBoxes](#rwd-html-checkboxes)

[Basic CSS](#basic-css) 
* [Change the Color of Text](#rwd-css-color)
* [Use CSS Selectors to Style Elements](#rwd-css-style-selectors)
* [Use CSS Class to Style Elements](#rwd-css-style-class)
* [Change the Font Size of an Element](#rwd-css-font-size)
* [Set the Font Family of an Element](#rwd-css-font-family)
* [Import a Google Font](#rwd-css-import-google)
* [Specify How Fonts Should Degrade](#rwd-css-font-degrade)
* [Size Your Images](#rwd-css-size-images)
* [Add Borders Around Your Elements](#rwd-css-add-border)
* [Add Rounded Corners with border-radius](#rwd-css-rounded-corner)
* [Make a Circular Image with a border-radius](#rwd-css-circular-image)
*
* [Use RBH Values to Color Elements](#rwd-css-rgb)
* [Use CSS Variables to change several elements at once](#rwd-css-variables)
* [Use CSS Variables to change several elements at once](#rwd-css-variables)
* [Attach a Fallback value to a CSS Variable](#rwd-css-fallback)
* [Improve Compatability with Browser Fallbacks](#rwd-css-compatability)
* [Change a variable for a specific area](#rwd-css-specific)
* [Use a media query to change a variable](#rwd-css-media-query)

[Applied Visual Design](#applied-visual-design)
* [Create Visual Balance Using the text-align Property](#rwd-avd-visual-balance)
* [Adjust the Width of an Element using the width Property](#rwd-avd-width)
* [Adjust the Height of an Element using the height Property](#rwd-avd-height)
* [Use the strong Tag to Make Text Bold](#rwd-avd-strong)
* [Use the u Tag to Underline Text](#rwd-avd-underline)
* [Use the em Tag to Italicize Text](#rwd-avd-italicize)
* [Use the s Tag to Strikethrough Text](#rwd-avd-strikethrough)
* [Create a Horizontal Line using the hr ELement](#rwd-avd-horizontal)
* [Add a box-shadow to a Card-like Element](#rwd-avd-box-shadow)
* [Decrease the Opacity of an Element](#rwd-avd-opacity)
* [Use the text-transform Property to Make Text Uppercase](#rwd-avd-text-transform)
* [Set the font-weight](#rwd-avd-font-weight)
* [Set the line-height](#rwd-avd-line-height)
* [Adjust the Hover State of an Anchor Tag](#rwd-avd-hover-state)
* [Change an Element's Relative Position](#rwd-avd-relative-position)
* [Lock an Element to its Parent with Absolute Positioning](#rwd-avd-absolute-position)
* [Lock an Element to the Browser Window with Fixed Positioning](#rwd-avd-fixed-position)
* [Push Elements Left or Right with the float Property](#rwd-avd-float)
* [Change the Position of Overlapping Elements with the z-index property](#rwd-avd-z-index)
* [Center an Element Horizontally Using the margin Property](#rwd-avd-margin)
* [Learn about Complementary Colors](#rwd-avd-complementary-colors)
* [Learn about Tertiary Colors](#rwd-avd-tertiary-colors)
* [Adjust the Hue/Saturation/Tone of a Color](#rwd-avd-hue)
* [Create a Gradual CSS Linear Gradient](#rwd-avd-linear-gradient)


# Responsive Web Design Certification

<a name="basic-html"/>

## Basic HTML

<a name="rwd-html-comment"/>

#### Comment HTML
```
<!-- COMMENTED OUT TEXT -->
```
[Back to Top](#home)

---

<a name="rwd-html-images"/>

#### Adding Images
```
<img src="image.url" alt="descriptive text">
```
[Back to Top](#home)

---

<a name="rwd-html-unordered-list"/>

#### Create a Bulleted List
```
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```
[Back to Top](#home)

---

<a name="rwd-html-ordered-list"/>

#### Create an Ordered List
```
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
```
[Back to Top](#home)

---

<a name="rwd-html-text-field"/>

#### Create a Text Field
```
<input name="text">
```
[Back to Top](#home)

---

<a name="rwd-html-text-field-placeholder"/>

#### Add Placeholder Text to a Text Field
```
<input name="text" placeholder="placeholder"/>
```
[Back to Top](#home)

---

<a name="rwd-html-form"/>

#### Create a Form
```
<form action="/URL">
...
</form>
```
[Back to Top](#home)

---

<a name="rwd-html-submit"/>

#### Add a Submit Button to a Form
```
<button type="submit">Submit</button>
```
[Back to Top](#home)

---

<a name="rwd-html-required"/>

#### Use HTML5 to Require a Field
```
<input type="text" required>
```
[Back to Top](#home)

---

<a name="rwd-html-radio"/>

#### Create Radio Buttons
```
<label for="description">
    <input type="radio" name="descriptor">description
</label>
<label for="description2">
    <input type="radio" name="descriptor">description2
</label>
```
[Back to Top](#home)

----

<a name="rwd-html-checkboxes"/>

#### Create Checkboxes
```
<label for="description">
    <input type="checkbox" name="group">description
</label>
<a name="basic-css"/>
```
[Back to Top](#home)

---

<a name="rwd-html-radiocheck-default"/>

#### Check Radio Buttons and Checkboxes by Default
```
<input type="radio" name="test" checked>
<input type="checkbox" name="test" checked>
```
[Back to Top](#home)

---

<a name="basic-css"/>

## Basic CSS

<a name="rwd-css-color"/>

#### Change the Color of Text
in-line:
```
<h1 style="color: blue">...</h2>
```
style-block:
```
h1 {
    color: red;
}
```
[Back to Top](#home)

---

<a name="rwd-css-style-selectors"/>

#### Use CSS Selectors to Style Elements
```
h2 { 
    color: red;
}
```
[Back to Top](#home)

---
<a name="rwd-css-style-class"/>

#### Use CSS Class to Style Elements
```
.blue-text {
    color:blue;
}
<div class="blue-text">...</div>
<h2 class="blue-text">...</h2>
```
[Back to Top](#home)

---
<a name="rwd-css-font-size"/>

#### Change the Font Size of an Element
```
h1 {
    font-size: 30px;
}
```
[Back to Top](#home)

---
<a name="rwd-css-font-family"/>

#### Set the Font Family of an Element
```
h1 { 
    font-family: sans-serif;
}
```
[Back to Top](#home)

---
<a name="rwd-css-import-google"/>

#### Import a Google Font
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

h1 {
    font-family: Lobster;
}
```
[Back to Top](#home)

---
<a name="rwd-css-font-degrade"/>

#### Specify How Fonts Should Degrade
```
h1 {
    font-family: Lobster, monospace;
}
```
[Back to Top](#home)

---
<a name="rwd-css-size-images"/>

#### Size Your Images
```
.thumbnail {
    width: 50px;
}
```
[Back to Top](#home)

---
<a name="rwd-css-add-border"/>

#### Add Borders Around Your Elements
```
.thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
}
```
[Back to Top](#home)

---
<a name="rwd-css-rounded-corner"/>

#### Add Rounded Corners with border-radius
```
.rounded-border {
    border-radius: 10px;
}
```
[Back to Top](#home)

---
<a name="rwd-css-circular-image"/>

#### Make a Circular Image with a border-radius

```
.border-class {
    border-radius: 50%;
}
```
[Back to Top](#home)

---

<a name="rwd-css-rgb"/>

#### Use RGB Values to Color Elements
```
// 255 = white, 0 = black
// rgb(0, 0, 255)     = BLUE
// rgb(255, 0, 0)     = RED
// rgb(218, 112, 214) = ORCHID
// rgb(160, 82, 45)   = SIENNA

body {
    background-color: rgb(0, 0, 0);
}
```
[Back to Top](#home)

---

<a name="rwd-css-variables"/>

#### Use CSS Variables to change several elements at once
```
.test {
    --variable-color: gray;
    --variable-hue: blue;
}

.test-use {
    background: var(--variable-color);
}

.test-use2{
    background: var(--variable-color);
}
```
[Back to Top](#home)

---

<a name="rwd-css-fallback"/>

#### Attach a Fallback value to a CSS Variable
```
.test-use {
    background: var(--variable-color, pink);
}
```
[Back to Top](#home)

---

<a name="rwd-css-compatability"/>

#### Improve Compatability with Browser Fallbacks
```
:root {
    --red-color: red;
}

.red-box {
    background: red;
    background: var(--red-color);
}
```
[Back to Top](#home)

---

<a name="rwd-css-specific"/>

#### Change a variable for a specific area
```
:root {
    --background-club: red;
}

.blue-club {
    --background-club: blue;
}
```
[Back to Top](#home)

---

<a name="rwd-css-media-query"/>

#### Use a media query to change a variable
```
:root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
}

@media (max-width: 350px) {
    :root {
        /* add code below */
        --penguin-size: 200px;
        --penguin-skin: black;
        /* add code above */
    }
}
```
[Back to Top](#home)

---

<a name="applied-visual-design"/>

## Applied Visual Design

<a name="rwd-avd-visual-balance"/>

#### Create Visual Balance Using the text-align Property
```
text-align: justify; // spans text to the container.
text-align: center;  // centers the text.
text-align: right;   // aligns text to the right.
text-align: left;    // aligns text to the left. (default)
```
[Back to Top](#home)

---

<a name="rwd-avd-width"/>

#### Adjust the Width of an Element using the width Property
```
width: 640px;
width: 80%;
```
[Back to Top](#home)

---

<a name="rwd-avd-height"/>

#### Adjust the Height of an Element using the height Property
```
height: 480px;
height: 90%;
```
[Back to Top](#home)

---

<a name="rwd-avd-strong"/>

#### Use the strong Tag to make Text Bold
```
<strong>Text</strong>
```
[Back to Top](#home)

---

<a name="rwd-avd-underline"/>

#### Use the u Tag to Underline Text
```
<u>Text</u>
```
[Back to Top](#home)

---

<a name="rwd-avd-italicize"/>

#### Use the em Tag to Italicize Text
```
<em>Text</em>
```
[Back to Top](#home)

---

<a name="rwd-avd-strikethrough"/>

#### Use the s Tag to Strikethrough Text
```
<s>Text</s>
```
[Back to Top](#home)

---

<a name="rwd-avd-horizontal"/>

#### Create a Horizontal Line Using the hr Element
```
<hr> //self-closing tag.
```
[Back to Top](#home)

---

<a name="rwd-avd-box-shadow"/>

#### Add a box-shadow to a Card-like element

The ```box shadow``` property takes values for ```offset-x``` (how far to push the shadow horizontally from the element), ```offset-y``` (how far to push the shadow vertically from the element), ```blue-radius```, ```spread-radius``` and a color value, in that order. The ```blur-radius``` and ```spread-radius``` values are optional.
```
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```
[Back to Top](#home))

---

<a name="rwd-avd-opacity"/>

#### Decrease the Opacity of an Element
```
1   = opaque
0.5 = half transparent
0   = fully transparent
```
[Back to Top](#home)

---

<a name="rwd-avd-text-transofrm"/>

#### Use the text-transform Property to Make Text Uppercase
```
lowercase  = "transform me"
uppercase  = "TRANSFORM ME"
capitalize = "Transform Me"
initial    = "Transform me"
inherit    = Use the text-transform from parent
none       = Use original text (default)

e.g. text-transform: lowercase
```
[Back to Top](#home)

---

<a name="rwd-avd-font-weight"/>

#### Set the font-weight
The ```font-weight``` property sets how thick or thin characters are in a section of text

[Back to Top](#home)

---
<a name="rwd-avd-line-height"/>

#### Set the line-height
The ```line-height``` property changes the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets\

[Back to Top](#home)

---

<a name="rwd-avd-hover-state"/>

#### Adjust the Hover State of an Anchor Tag
A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element. 
```
a:hover {
    color:red;
}
```
[Back to Top](#home)

---

<a name="rwd-avd-relative-position"/>

#### Change an Element's Relative Position
How CSS should move based on the relative current position of the normal flow. It doesn't effect other elements and can use pixels, percentages or ems.
```
p {
    position: relative;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
}
```
[Back to Top](#home)

---

<a name="rwd-avd-absolute-position"/>

#### Lock an Element to its Parent with Absolute Positioning
Absolute position removes the element from the normal flow of the document so surrounding items ignore it. One nuance with absolute positioning is that it will be locked relative to its closest positioned ancestor. If you forget to add a position rule to the parent item, (this is typically done using position: relative;), the browser will keep looking up the chain and ultimately default to the body tag.
```
p {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
}
```
[Back to Top](#home)

---

<a name="rwd-avd-fixed-position"/>

#### Lock an Element to the Browser Window with Fixed Positioning
This is a type of absolute positioning. Other items no longer "realize" where it is positioned. A difference between fixed and absolute is that fixed position won't move when users scroll.
```
p {
    position: fixed;
}
```
[Back to Top](#home)

---

<a name="rwd-avd-float"/>

#### Push Elements Left or Right with the float Property
Floating elements are removed from the normal flow of a document and pushed to either the left or right of their containing parent element. It is commonly used with the width property to specify how much horizontal space the floated element requires.
```
float: left;
flaot: right;
```
[Back to Top](#home)

---

<a name="rwd-avd-z-index"/>

#### Change the Position of Overlapping Elements with the z-index Property
z-index can specifiy the order of how elements are stacked on top of each other. It must be an integer and the higher the number, the more in the front it will be placed at.
```
z-index: 1;
```
[Back to Top](#home)

---

<a name="rwd-avd-margin"/>

#### Center an Element Horizontally Using the margin Property
Works with block elements as well as images. Images are by default set to inline, but using the ```display:block``` can convert them to blocks.
```
margin: auto;
```
[Back to Top](#home)

---

<a name="rwd-avd-complementary-colors"/>

#### Learn about Complementary Colors
There's a color wheel and when two colors are on the opposite side o feach other they are called complementary colors. They have the characteristic that if they are combined, they 
```
red (#FF0000) and cyan (#00FFFF)
green (#00FF00) and magenta (#FF00FF)
blue (#0000FF) and yellow (#FFFF00)
```
[Back to Top](#home)

---

<a name="rwd-avd-tertiary-colors"/>

#### Learn about Tertiary Colors
Tertiary colors are the result of combing a primary color with one of its secondary color neighbors. For exmaple, Red and Yellow make Orange.
[Back to Top](#home)

---

<a name="rwd-avd-hue"/>

#### Adjust the Hue of a Color
Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the ```hsl()``` property as an alternative way to pick a color by directly stating these characteristics.

* Hue is what people generally thinkg of as 'color'. Picture a spectrum of colors strarting from red on the left, greend in the middle, and blue on the right. ```hsl()``` uses a color wheel with a value between 0 and 360.
* Saturation is the amount of gray in a color. A fully saturated color has no gray in it and a minimally saturated color is almost completely gray. 100% is fully saturated
* Lightness is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white) where 50% is the normal color.
```
red	hsl(0, 100%, 50%)
yellow	hsl(60, 100%, 50%)
green	hsl(120, 100%, 50%)
cyan	hsl(180, 100%, 50%)
blue	hsl(240, 100%, 50%)
magenta	hsl(300, 100%, 50%)
```
[Back to Top](#home)

---

<a name="rwd-avd-tone"/>

#### Create a Gradual CSS Linear Gradient
Colors can be any usuable form including ```#hex```, ```rgb()``` and ```hsl```
```
background: linear-gradient(90deg, red, blue, ...)
```