// Array map method
let arr = [45, 26, 89, 46, 77]
/*
let a = arr.map((element) => {
    console.log(element);
    return element + 1
})
*/
/* map create an array each time after performing some operations on it.


 forEach is used when we just want to perform some operations ***use map if you want to create a new array***
 it takes three arguements value index and array and funtional as name suggests same does foreach method
*/
/*
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
})
*/

// Array filter method

/*
it returns the only elements which returns true
don't modifies original array
*/
/*
let a = arr.filter((value) => {
    return value < 50
})
*/
arr = [5, 6, 77, 9, 99, 11]

const a = arr.reduce((a, b) => {
    return a + b
})

console.log(a); 