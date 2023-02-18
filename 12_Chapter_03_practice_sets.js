const prompt = require("prompt-sync")({sigint:true})

// Q.1 Write a program to print the marks of a student in an object using for loop
// Solution ==>

const studentsMarks = {
    aryan: 92, rohit: 85, Subham: 89, Rohan: 75
}
/*
 for (let i = 0; i < Object.keys(studentsMarks).length; i++) {
 console.log("marks of ", Object.keys(studentsMarks)[i], studentsMarks[Object.keys(studentsMarks)[i]])
 }
 */
// object datatype is the collection of different keys and their values
// Object.keys gives an array of all the keys present in an object

// Q.2 Write the problem 1 using for in loop


// Solution ==>

/*
 for (let key in studentsMarks) {
 console.log("marks of ", key, " is :", studentsMarks[key])
 }

 */

// Q.3 write a program which takes input from the user until user provides the correct number

// Solution ==>
const correctNumber = 69;
console.log("Guess the number");
let i;
while ( i !== correctNumber) {
    i = prompt("Enter the number");
    i = parseInt(i)
}
console.log("You have entered the correct number",i);