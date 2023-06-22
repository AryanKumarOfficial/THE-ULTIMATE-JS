// String methods

// const sampleString = `               This     is a sample string to understand string methods          `
// const newSampleString = "in JavaScript"
// console.log(sampleString.length)
// .length property returns the total number of characters in the string
// console.log(sampleString.toUpperCase())

// .toUpperCase() converts the string case to capital which is a function


// console.log(sampleString.toLocaleUpperCase())

// .toLowerCase() converts the string case to small, which is a function
// indexing in javaScript starts from 0

// console.log(sampleString.slice(5,51))
// only prints the string from starting index to ending index excludes ending index from beginning

// console.log(sampleString.slice(15))

//on passing single argument it returns the whole string deleting the number of characters from start

// console.log(sampleString.replace('sample', 'example'))

// .replace() function takes two argument first search it in the existing string and replaces it with the second argument. It is case-sensitive function that checks for the same case

// console.log(sampleString.concat(newSampleString, "okay", "done"))

// its add the new  string to the existing one

// console.log(sampleString.trim())

// .trim function removes the white spaces from starting and end of the string

// Quick Quiz : print a string using a loop

// let newString = "Aryan"
// let result = "";
// for (let i = 0; i < newString.length; i++) {
//     result += newString[i]
// }
// console.log(result)

let Name = "new.png"

// console.log(Name.indexOf("ar"))

// indexOF returns the  index of the first occurrence of  character in the string
// returns -1 for non-existing searches

// console.log(Name.lastIndexOf("a"))

// returns the index of last occurrence of character in the string

// console.log(Name.charAt(2))

// returns the string at specific index in the string


// console.log(Name.substring(1, 4))


// returns the group of string i.e. substring from starting index to ending index from a given string excluding the ending index


// console.log(Name.slice(0, -2))


//  .slice is similar to substring except it accepts negative values


// console.log(Name.split("."))

// gives an array of strings after separating the whole string by a seperator parameter


// console.log(Name.startsWith("n"))


// .startsWith() checks whether given string starts with or not by given parameters


// console.log(Name.endsWith("g"))


// .endsWith() checks whether given string ends with or not by given parameters

// console.log(Name.includes("."))

//tells weather given parameter is present in the string or not returns boolean

// console.log(Name.repeat(4))

// repeat() repeats the given string as many times the parameter is given


// console.log(Name.match("n"))


// gives the information about the first match in an array


// console.log(Name.search("n"))

// it is similar to indexOf, but it can take regular expressions as argument



