document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working in EventListners!');


  // function reference must be same to removeEventListener as addEventListner
  let task = (e) => {
    let x = Math.floor(Math.random() * 80)
    let y = Math.floor(Math.random() * 150)
    let z = Math.floor(Math.random() * 206)
    console.log(e.type, x - y, y - z, z - x)
    document.body.style.backgroundColor = `rgb(${x },${y },${z })`
    // alert("Hello Aryan!")
  }
  const btn = document.querySelector("#btn");
  btn.addEventListener("mousemove", task)
  document.body.addEventListener("mousemove", task)
  // btn.addEventListener("click", () => {
  //   alert("Hello Kush!")
  // })

  //   let a = prompt("Enter your favourite number")
  //   if (a == "2") {
  //     btn.removeEventListener("click", task)
  //   }
});


// 0