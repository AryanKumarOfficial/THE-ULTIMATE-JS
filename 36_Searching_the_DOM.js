const root = document.getElementById('root')
let data = `<h1>RootElement</h1><button onclick="showAlert();"></button>`


root.innerHTML = data
root.firstElementChild.classList.add('h1')
const btn = root.childNodes[1]
const alert = document.querySelector('.alert')
btn.innerText = 'alert'
btn.classList.add('btn')

function showAlert() {
    alert.classList.add('display')
    setTimeout(() => {
        alert.classList.remove('display')
    }, 2000);
}


// document.getElementById();// access the element by its id
let h1 = document.getElementsByClassName('h1');// access the element by its class name 
h1 = Array.from(h1);// converted to array from html collection 
// console.log(h1[0]);

// document.getElementsByTagName();// access the element by its tag name
let button = document.getElementsByTagName('button');
button = Array.from(button); // converted to array from html collection
// console.log(button[0]);

// document.querySelector();// access the element by its css selector
let btn1 = document.querySelector('#root .btn'); // access the element by its id and class name selects the first element
// console.log(btn1);

// document.querySelectorAll();// access the element by its css selector

let btn2 = document.querySelectorAll('#root .btn'); // access the element by its id and class name selects all the element

// console.log(btn2[0]);

root.querySelector('.btn').style.backgroundColor = 'rgba(255,255,255,0.15)' // access the element by its class name and change the style

root.querySelector('.btn').style.border = 'none' // access the element by its class name and change the style
root.querySelector('.btn').style.borderRadius = '5px' // access the element by its class name and change the style
root.querySelector('.btn').style.padding = '10px' // access the element by its class name and change the style
root.querySelector('.btn').style.cursor = 'pointer' // access the element by its class name and change the style
root.querySelector('.btn').style.color = '#fff' // access the element by its class name and change the style
root.querySelector('.btn').style.fontSize = '1rem' // access the element by its class name and change the style
root.querySelector('.btn').style.fontWeight = 'bold' // access the element by its class name and change the style
root.querySelector('.btn').style.textTransform = 'uppercase' // access the element by its class name and change the style
root.querySelector('.btn').style.margin = '10px' // access the element by its class name and change the style
root.querySelector('.btn').style.boxShadow = '0 0 10px rgba(0,0,0,0.15)' // access the element by its class name and change the style
root.querySelector('.btn').style.outline = 'none' // access the element by its class name and change the style
root.querySelector('.btn').style.transition = 'all 0.3s ease-in-out' // access the element by its class name and change the style
root.querySelector('.btn').style.width = '100px' // access the element by its class name and change the style
root.querySelector('.btn').style.height = '40px' // access the element by its class name and change the style
root.querySelector('.btn').style.display = 'block' // access the element by its class name and change the style
root.querySelector('.btn').style.margin = 'auto' // access the element by its class name and change the style
root.querySelector('.btn').style.textAlign = 'center' // access the element by its class name and change the style
// add hover effect
root.querySelector('.btn').addEventListener('mouseover', () => {
    root.querySelector('.btn').style.backgroundColor = 'rgba(255,255,255,0.25)' // access the element by its class name and change the style
})
// remove hover effect
root.querySelector('.btn').addEventListener('mouseout', () => {
    root.querySelector('.btn').style.backgroundColor = 'rgba(255,255,255,0.15)' // access the element by its class name and change the style
})

// add click effect
root.querySelector('.btn').addEventListener('click', () => {
    root.querySelector('.btn').style.backgroundColor = 'rgba(255,255,255,0.35)' // access the element by its class name and change the style
})
// remove click effect
root.querySelector('.btn').addEventListener('mouseup', () => {
    root.querySelector('.btn').style.backgroundColor = 'rgba(255,255,255,0.25)' // access the element by its class name and change the style
})


document.getElementsByName('button') // access the element by its name
document.querySelectorAll('button') // access the element by its tag name
// Path: 37_Traversing_the_DOM.js