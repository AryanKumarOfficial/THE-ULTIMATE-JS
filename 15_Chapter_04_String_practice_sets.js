// Q.1 What will the following print in javaScript :
// console.log("har\"".length)

//  Solution ==>

// console.log("har\"".length)

// output : 4

// Q.2 Explore the includes, startWith and endWith function in javaScript

// Solution ==>
/*
 const sentences = `The quick brown fox jumped over the lazy dog`

 const words = `fox`
 const first = "The"
 const last = "dog"
 console.log(`the "${words}" ${sentences.includes(words) ? 'is' : 'is not '} present in the sentence `)
 console.log(`the sentence${sentences.startsWith(first) ? '' : 'does not  '} starts with "${first}"`)


 console.log(`the sentence${sentences.endsWith(last) ? '' : 'does not  '} ends with "${last}"`)

 */

//Q.3 write a program to convert a given string to a lower case string
// "Please give me Rs 1000"

/*
 const toLowerCase = (s) => {
 return s.toLowerCase();
 }

 let str = 'I am a sample string'
 console.log(toLowerCase(str))   */

// Q.4 extract the amount out of the string

// Solution ==>

// "Please give me Rs 1000"

/*
 let str = 'Please give me Rs 1000'

 // let amount = parseInt(str.match(/\d+/g)[0])
 let amount = str.slice(str.lastIndexOf('1000'))
 console.log(amount)
 */

// Q.5 try to change the 4th character of the string. were you able to do it?

// Solution ==>
/*
let str = "aryan"
let newStr = str.split("a")[0].concat("i")

console.log(newStr)

 */