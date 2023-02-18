// A fragment of code which produces a value is called an expression.Every value literally is an expression.
let a = 45;
let b = 4;
console.log("Operators in JS");

// Arithmetic Operators

console.log("a+b = ", a + b); //addition
console.log("a-b = ", a - b); //Substraction
console.log("a*b = ", a * b); //multiplication
console.log("a/b = ", a / b); //division
console.log("a**b = ", a ** b); //exponential
console.log("a%b = ", a % b); //Modulus
console.log("a++ = ", a++); //Incriment
console.log(a);
console.log("a-- = ", a--); //Decriment
console.log(a);

// Assignment Operators

a = 8; //Assigns  a value to the variable
console.log(a);
a += 4; //a=a+4
console.log(a);
a -= 2; //a=a-2
console.log(a);
a *= 5; //a=a*5
console.log(a);
a /= 16; //a=a/16
console.log(a);
a %= 3; //a=a%3
console.log(a);
a **= 2; //a=a**2
console.log(a);

// Comparision Operator

let comOne = 11;
let compTwo = "11";
console.log("compOne == compTwo is ", comOne == compTwo); //Equel to
console.log("compOne != compTwo is ", comOne != compTwo); //not Equel to
console.log("compOne === compTwo is ", comOne === compTwo); //Equel to value and dataType
console.log("compOne !== compTwo is ", comOne !== compTwo); //not Equel to value and datatype
console.log("compOne > compTwo is ", comOne > compTwo); //greater than
console.log("compOne < compTwo is ", comOne < compTwo); //smaller than
console.log("compOne >= compTwo is ", comOne >= compTwo); //Greater than Equel to
console.log("compOne <= compTwo is ", comOne <= compTwo); //Smaller than Equel to

// Logical Operator

let x = 15;
let y = 7;
console.log(x > y && x == 15); //Logical AND
console.log(x > y || x == 16); //Logical OR
console.log(!x > y); //Logical NOT

// BITWISE Operator

console.log(x & y);  //AND
console.log(x | y);//OR
console.log(x ^ y);  //XOR
console.log(~y);  //NOT
console.log(y << 1);  //LS
console.log(y >> 1);  //RS

// Comments in JS
/*
Sometimes we want our program to contain some text which is not executed by JS engine
Such a  text in JS is known as comment.
there are two types of comment:
1.single line comment //
2.multiline comment /* 
---------------------------
----------------------------
-------------------------
--------------------------------
------------------
-------------------------------
----------------------------
/**/
