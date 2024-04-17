# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

(https://github.com/MellTins/results-summary-component-main/assets/113524300/8e1ea667-b7c0-446f-952a-89409a510085)



### Links

- Solution URL: (https://www.frontendmentor.io/solutions/results-summary-using-json-JBf_wbOT5O)
- Live Site URL: (https://melltins.github.io/results-summary-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This project has challenging me a lot, i have a hard time trying to figured it out how to customize elements that a icreated in javascript. I still have some work to do on this, but i am ok with the results.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.summary{
    color:  hsl(224, 30%, 27%);;
    border-radius: 0 25px 25px  0;
    padding: 30px;
    box-shadow: 1px 0px 4px 0px rgb(169, 176, 181);
    width: 200px;
    background-color: hsl(0, 0%, 100%);
    
}
```
```js
function carregar() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultado = document.querySelector("#results");
```


### Continued development

I am a beginner on JavaScript and i am learning how to create elements dinamycally and that challenged me a lot.



### Useful resources

-[(https://www.origamid.com/projetos/css-grid-layout-guia-completo/)) - This helped me to organize the interface. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@MellTins](https://www.frontendmentor.io/profile/MellTins)


## Acknowledgments

I learned what a fetch is, a map, how to create certain elements, i nedd to learn more about the junction of css and javascript,but i have the greatest time trying to do this beginner challenge.

 
