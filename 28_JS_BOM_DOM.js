window.console.log(window);
// everything in js comes under window object
// window is the global object in js
// window is the parent object of all objects
// window is the global scope in js
console.log(document); //also window.document

let choice = document.querySelector('#color');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    document.body.style.backgroundColor = choice.value;
    if (choice.value == "#ffffff") {
        document.body.style.color = "black";
    }
    else {
        document.body.style.color = "white";
    }
});
document.body.style.backgroundColor = "#4564ff";