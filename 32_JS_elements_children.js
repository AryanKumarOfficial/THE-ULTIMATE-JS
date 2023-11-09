// accessing the child of the elements
const div = document.querySelector("#container")
div.firstElementChild.style.color = "purple";
div.lastElementChild.style.color = "blue";
div.children[0].style.backgroundColor = "green";
div.children[0].style.color = "greenyellow";


console.log(div.firstChild);
console.log(div.lastChild);
console.log(div.childNodes);

// collection of childnodes seems to be array but it is not array. it is nodelist
// nodelist is collection of nodes
// we can convert it into array by using Array.from()
console.log(Array.from(div.childNodes));