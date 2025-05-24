console.dir(document.getElementsByTagName("span"));

const first = document.getElementById("first")
first.outerHTML = `<div>aryan</div>`
console.log(document.firstChild.nodeValue) //data

document.getElementById("second").hidden = true