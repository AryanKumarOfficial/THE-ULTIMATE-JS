document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working in 45_HTML_classes!');
  const first = document.getElementById("first");
  console.log(first);


  first.className = "red student identity card replica dark-text" // change the class -  replaces acutally
  first.classList.remove("red") // removes the specific class
  first.classList.add("blue") // adds the specific class
  console.log(first.classList.contains("blue")) // if exists -  boolean
  first.classList.toggle("blue") // toogle the specific class


});

