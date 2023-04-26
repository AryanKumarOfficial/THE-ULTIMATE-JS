// const prompt = require("prompt-sync")({ sigint: true });
// Loops in javaScript

// For Loops

// for (let i = 0; i < 40; i++) {
//   console.log(i);
// }

// Addition program
/* 
sum = 0;
let n = prompt("Enter any natural number\n");
n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
  sum += i + 1;
}

console.log("the sum of first " + n + " numbers is " + sum);
*/

// QUIZ: Write any loop program

// let sum = 0;
// let n = prompt("Enter any positive number number\n");
// n = Number.parseInt(n);
// for (let i = 0; i < n; i++) {
//   i++;
//   sum += i + 1;
// }
// console.log(sum);

// For in Loop

let obj = {
    aryan: 45, rohan: 46, sahil: 41, sohan: 39, sumit: 32,
};

for (let a in obj) {
    console.log("marks of ", a, " is ", obj[a]);
}
for (let b of "Aryan") {
    console.log(b)
}
// For of loop only strings and arrays
for (let b of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(b);
}
