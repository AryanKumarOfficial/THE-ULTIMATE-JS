let num = [3, 54, 1, 3, 4]

// iteratinng through each array

/*
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
*/

// applying a funtion to each elements using for each Loop approach
/*
num.forEach((element) => {
    console.log(element * element)
})
*/
// Array.from used to create array form an string or html collection

/*
let names = "Aryan"
let arr = Array.from(names)
console.log(arr);
*/

// for of loop

/*
for (let i of num) {
    console.log(i);
    // i prints the each element
}
*/

// for in loop

/*
for (let i in num) {
    console.log(i, num[i]);
    // here i represents the key values of the elements
}
*/