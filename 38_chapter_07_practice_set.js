console.log("This is chapter 7 practice set");
// Q1 answers changing first element color
const nav = document.querySelector("#nav");
const ul = nav.firstElementChild;
const firstLi = ul.firstElementChild;
const anchor = firstLi.firstElementChild;

anchor.style.color = "red";

// Q3 

const parent = document.querySelector(".parent");
parent.firstElementChild.style.color = "green";
parent.lastElementChild.style.color = "green";

// Q4
let lis = document.getElementsByTagName("li");
lis = Array.from(lis);

lis.forEach((element) => {
    element.style.background = "cyan";
});