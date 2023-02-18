// functions in javaScript
/*
 * It is used to seperated a block of code to be used many times
 * Can be given different parameters to receive different results in the program
 * */
console.log("Functions in javaScript")
let a = 1;
let b = 2;
let c = 3;

// finding average without function
/*
 console.log("average of a and b is :", (a + b) / 2);
 console.log("Done");
 console.log("average of b and c is :", (b + c) / 2);
 console.log("Done");
 console.log("average of a and c is :", (a + c) / 2);
 console.log("Done");
 */

// creating a function
function meanIncremented(x, y) {
    return `one plus average of ${x} and ${y} is : ${(1 + ((x + y) / 2))}\nDone`;

}
// arrow function
const sum = (p, q) => {
    return p + q;
}

console.log(meanIncremented(a, c))
console.log(sum(9, 6))