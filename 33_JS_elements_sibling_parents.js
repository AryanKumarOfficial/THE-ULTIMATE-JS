console.log('hello');
/**
 * Elements with same parents are said to be sibling like body and head
 * can find next sibling using nextSibling or nextElementSibling
 * can find prev sibling using previousSibling or previousElementSibling
 * can find parend node using ParentNode or parentNode
 * firstChild return the first child of itself, it can be a comment , text or a element or even whitespaces.
 * But firstChildElement returns only elements if any.
 * same as parentnode and parentnodeelement
 */

const e = document.querySelector('#target');
const t = document.querySelector('#ans')

e.style.color = 'red'
e.nextElementSibling.style.color = 'blue'
e.previousElementSibling.style.color = 'green'
e.nextElementSibling.innerHTML = 'changed using accessing its siblings'
e.previousElementSibling.innerHTML = 'changed using accessing its siblings'
console.log(e.parentNode)