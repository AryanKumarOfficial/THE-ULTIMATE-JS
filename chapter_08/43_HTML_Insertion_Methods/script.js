let a = document.getElementsByTagName("div")[0]

// a.innerHTML += `<h1>Hello, World!</h1>`

let div = document.createElement("div") // creates a new element
div.innerHTML = `<h1>Hello, World !!</h1>`
// a.append(div) // append to the element at the end of node
// a.prepend(div) // append to the element at the start of node
// a.before(div)  // before the a element
// a.after(div)  // after the a element
a.replaceWith(div) // replaces a with div

// for (let i = 0; i < 10; i++) {
//     let div = document.createElement("div") // creates a new element
//     div.innerHTML = `<h1>Hello, World ${i + 1}!!</h1>`
//     a.appendChild(div)
// }

