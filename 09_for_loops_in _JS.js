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

let data = [
    {
        name: "Aryan",
        age: 19
    }, {
        name: "Kush",
        age: 22
    }, {
        name: "Janitor",
        age: 15
    },
]

for (let a in obj) {
    console.log("marks of ", a, " is ", obj[a]);
}
// for (let b of {"A":1,"B":2,"C":3}) {
//     console.log(b)
// }
// For of loop only strings and arrays
for (let b of data) {
    console.log("I am data b", b);
}
