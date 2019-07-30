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

* [Make a Circular Image with a border-radius](#rwd-css-circ)


# Responsive Web Design Certification

<a name="basic-html"/>

## Basic HTML

<a name="rwd-html-comment"/>

### Comment HTML
```
<!-- COMMENTED OUT TEXT -->
```
[Back to Top](#home)

---

<a name="rwd-html-images"/>

### Adding Images
```
<img src="image.url" alt="descriptive text">
```
[Back to Top](#home)

---

<a name="rwd-html-unordered-list"/>

### Create a Bulleted List
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

### Create an Ordered List
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

### Create a Text Field
```
<input name="text">
```
[Back to Top](#home)

---

<a name="rwd-html-text-field-placeholder"/>

### Add Placeholder Text to a Text Field
```
<input name="text" placeholder="placeholder"/>
```
[Back to Top](#home)

---

<a name="rwd-html-form"/>

### Create a Form
```
<form action="/URL">
...
</form>
```
[Back to Top](#home)

---

<a name="rwd-html-submit"/>

### Add a Submit Button to a Form
```
<button type="submit">Submit</button>
```
[Back to Top](#home)

---

<a name="rwd-html-required"/>

### Use HTML5 to Require a Field
```
<input type="text" required>
```
[Back to Top](#home)

---

<a name="rwd-html-radio"/>

### Create Radio Buttons
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

### Create Checkboxes
```
<label for="description">
    <input type="checkbox" name="group">description
</label>
<a name="basic-css"/>
```
[Back to Top](#home)

---

<a name="rwd-html-radiocheck-default"/>

### Check Radio Buttons and Checkboxes by Default
```
<input type="radio" name="test" checked>
<input type="checkbox" name="test" checked>
```
[Back to Top](#home)

---

## Basic CSS
---

<a name="rwd-css-circ"/>

### Make a Circular Image with a border-radius

```
.border-class {
    border-radius: 50%;
}
```

---