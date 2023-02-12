// Q1. create a variable of type string and try to add a number to it.
//ANSWER -->>
let strVariable = "This variable contains string ";
let numbVariable = 1058;
console.log(strVariable + numbVariable);

//ANSWER -->>
console.log(typeof (strVariable + numbVariable));

// Q3.Create a const object in javaScript can you change it to hold a number

//ANSWER -->>
const obj = {
  name: "Aryan",
  branch: "CSE",
  semester: 3,
};
// obj = 654; no we can't update this to number as const decleared variables aren't updatable

console.log(obj);

// Q4.Try to add a new key to the const object in problem 3.Where you were able to do this?

// ANSWER-->>

// We can do this like this key can be modified :::

obj["clg"] = "NGP";
obj["name"] = "Aryan-ji";

console.log(obj);

// Q5. Write a JS program to create a word meaning dict. of five words

const dict = {
  Integrity:
    "1.the quality of being honest and having strong moral principles \n" +
    "2.the state of being united or undivided",
  skill:
    "2.the ability to do something well, especially because of training, practice, etc.\n" +
    "2.an ability that you need in order to do a job, an activity, etc",
  protagonist:
    "1. the main character in a play, film or book\n" +
    "2.The protagonist makes key decisions that affect the plot",
  pursue:
    "1.to follow somebody/something in order to catch him/her/it\n" +
    "to try to achieve something or to continue to do something over a period of time",
  abnegation:
    "1.the action of renouncing or rejecting something.\n" + "2.self-denial.",
};
console.log(dict["abnegation"]);
