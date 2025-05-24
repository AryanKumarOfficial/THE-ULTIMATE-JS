const first = document.getElementById("first")
let a = first.getAttribute("class") // value of the attribute
console.log(a);
console.log(first.hasAttribute("class")); // boolean value
console.log(first.hasAttribute("style")); // boolean value
first.setAttribute("hidden", true) // adds attribute
first.removeAttribute("hidden") // removes attribute
console.table(first.attributes);
console.log(first.dataset); //  access custom attributes
console.log(first.dataset.game);
console.log(first.dataset.winner);

