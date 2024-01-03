console.log("Path: 37_matches_closest_contains.js");

const root = document.getElementById("root");
const sp1 = document.getElementById("sp1");
// console.log(root); // <div id="root"></div> (index.html) but not recommended
console.log(root);
// matches returns the boolean value if the element matches the selector or not

// console.log(root.matches("div")); // true
// console.log(root.matches("#root")); // true
// console.log(root.matches(".box")); // false

//closest returns the closest parent element of the element on which it is called according to the selector passed as an argument to it

// console.log(sp1.closest('.box')); // returns the closest parent element of the element on which it is called according to the selector passed as an argument to it

// console.log(sp1.closest('#sp1')); // this time it will return the element itself as it is the closest element to itself

// contains returns the boolean value if the element contains the element passed as an argument to it or not it takes only one argument which is the element to be checked

// console.log(root.contains(sp1)); // true

// console.log(root.contains(root)); // true as the element contains itself

// console.log(root.contains(document.body)); // false as the element is not the child of the body element