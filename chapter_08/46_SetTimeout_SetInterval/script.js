document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working in 46_SetTimeout_SetInterval!');


  // alert("Hello")

  // let a = setTimeout(() => { // runs once after the specificed time
  //   alert("Being Executed by the setTimeout")
  // }, 5000);

  // let consent = confirm("Do you want to run the timeout")

  // if (!consent) {
  //   clearTimeout(a) // cancels the setTimeout execution
  // }

  const sum = (a, b) => {
    console.log("Calculating " + (a + b));
    return a + b;
  }

  setTimeout(sum, 1000, 10, 15);
  const insertDiv = (name) => { // continues running after a time interval
    const div = document.createElement("div");
    div.innerHTML = `<h1>Hello, ${name}!</h1>`
    document.body.append(div)
    document.body.scrollIntoView({ behavior: "smooth", block: "end" })
  }
  const i = setInterval(insertDiv, 1000, "aryan".toUpperCase());
  setTimeout(() => {
    clearInterval(i) // clear the interval
  }, 3000);

  setTimeout(() => {
    const div = document.createElement("div")
    div.innerHTML = `<body>
                      <h1>Welcome to 46_SetTimeout_SetInterval</h1>
                    </body>`
    document.body.replaceWith(div)
  }, 6000);

});
