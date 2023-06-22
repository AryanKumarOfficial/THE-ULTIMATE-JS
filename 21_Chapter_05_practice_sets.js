// Chapter 5 Practice set

// Q.01 Create an array of numbers and take inputs from the user to add numbers to the array

// Ans.==>
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 99]



while(1){
	
let data =  prompt("Enter the number you want to add in the array")
data = Number.parseInt(data)
arr.push(data)
console.log(arr)
}
*/

// Q.02 Enter the array until zero is not added to the array

// Sol.==>
/*
let arr  =  [2,3,4,5,6,7,8,99]
let data;
do{
data =  prompt("Enter the number you want to add in the array")
data = Number.parseInt(data)
arr.push(data)
}while(data!=0)
console.log("\nYou have entered",data)
console.log("\n",arr,"\n")
*/

// Q.03 filter for numbers divisible by 10 from a given array

// Soln.==>
/*
let arr = [10, 60, 90, 99, , 330, 87, 16, 20]
let newd = arr.filter((x) => {
    return x % 10 == 0
})
console.log(newd)
*/

// Q.04 Create an array of square of given numbers
// Sol.==>
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 99]

const n = arr.map((item) => {
    return item * item;
})
*/

// Q.05 Use reduce to calculate the factorial of a given number from an array of first n natural numbers(n being the number whoose factorial needs to be calculated)

// Sol==>
let arr = [2, 3, 4, 5, 6, 7, 8, 9]
let n = arr.reduce((a, b) => {
    return a * b
})

console.log(n)