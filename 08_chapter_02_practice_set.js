// CHAPTER SET 2
// Q1.Use logical operator to find weather the person age lies between 10 to 20 yrs.

/*
let age = prompt("Enter your valid age...")
age = parseInt(age)
if (age<=0) {
  alert("invalid age")
}
else if (age>10 && age<20) {
  alert("Your age lies between 10 to 20")
}
else {
  alert("Your age doesn't lies between 10 to 20 yrs")
}
*/

//Q2.Demonstrate the switch case statement in javascript

/*
let age = prompt("Enter your valid age...")
age = parseInt(age)
switch (age) {
  case 12:
        alert("Your age is 12")
        break;
  case 13:
        alert("Your age is 13")
        break;
  case 14:
        alert("Your age is 14")
        break;
  case 15:
        alert("Your age is 15")
        break;
    default:
    alert("You are out of options")
      break;
}
*/

//Q3. Write a javascript program to check weather the program is divisible by both 2 and 3 or not

/*
let number = prompt("Enter any number")
number = parseInt(number)
if (number%2===0 && number%3===0) {
  alert(number,"is divisible by both 2 and 3")
}
else if (number%2===0) {
  alert(number,"is divisible by 2 only")
}
else if (number%3===0) {
  alert(number,"is divisible by 3 only")
}
else {
alert("It is neither divisible by 2 nor 3")
}
*/

// Q4.write a javascript program to find a number is divisible by either 2 or 3

/*
let numb = prompt("Enter any positive number")
numb = parseInt(numb)
if (numb%2==0 || numb%3==0) {
  alert(numb,"is divisible by either 2 or 3")
} else {
  alert(numb,"is neither divisible by 2 nor 3")
}
*/

// Q5.Print "you can drive" or "you can't drive" based on age being grater than 18 using ternary operator

let age = prompt("Enter your valid age");
alert(
  "You can",
  age > 18 ? "drive as you are above 18" : "not drive as you are below 18"
);
