console.log('# Hello from Tut34');
// navigating through only elements
const body = document.body;

console.log('The first child of body is ', body.firstChild);
console.log('The first Element child of body is ', body.firstElementChild); // first child which is an element

// applying style through JS
const changeNavBg = () => {
    body.firstElementChild.style.background = 'red';
}

changeNavBg();