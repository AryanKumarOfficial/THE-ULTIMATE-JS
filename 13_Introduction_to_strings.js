/*
 strings are used to store and manipulate texts
 it can be created using double quotes "" , single quotes '' and also using string literals ``
 * */
const name = "Aryan";
const name2 = 'Kush';
const name3 = `Ashu`;
// console.log(name.length);
// console.log(name2.length);
// console.log(name3.length);
console.log(name[0])
//string can be treated as array means can access their characters using array methods
// we can insert variables directly in template literal. This is called string interpolation

// Escape sequences in strings
let fruit = '1234567\r890'
// carriage return (\r) escape sequence replaces the character after it from 0 index character to the right side
console.log(fruit)