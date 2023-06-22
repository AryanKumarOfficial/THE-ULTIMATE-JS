/**
 * Array are variables which can hold more than one values
 * Arrays are type of object
 * Array are mutable unlike strings
 */

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, false, {"absent": true, "present": false}]
console.log(a)
/**
 * console.log(a[0])
 * console.log(a[1])
 * console.log(a[2])
 * console.log(a[3])
 * console.log(a[4])
 * console.log(a[5])
 * console.log(a[6])
 * console.log(a[7])
 * console.log(a[8])
 * console.log(a[9])
 * console.log(a[10])
 * console.log(a[11])
 *
 */
a[12] = 25 //adding new value to the array
a[0] = 95 //changing the value of an array
console.log(a.length) //tells the length of the array
console.log(typeof a) //tells the  data type of the array

// Quick Quiz : print the elements of the array using for loop

let array = [12, 65, "abc", true, 98, false, true, false, undefined, "aryan"]

for (let i = 0; i < array.length; i++) {
    console.log(array[i], typeof array[i])
}