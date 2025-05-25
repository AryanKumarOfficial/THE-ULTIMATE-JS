document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is working in Events!');

  let a = document.getElementsByClassName("container")[0]
  a.onclick = () => {
    a.innerHTML = `<h1>content Added</h1>`
  }
});
