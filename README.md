# Introduction
[freeCodeCamp](https://learn.freecodecamp.org/) teaches you the fundamentals and beyond of web development in bite-sized lessons. I created this after completing each exercise to create a personal cheetsheet of snippets to reference topics that I've learned. This will likely not be useful to you unless you already know how to code. The website gives instructions on how to complete each exercise. 

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