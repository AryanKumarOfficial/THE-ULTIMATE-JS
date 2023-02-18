/*
-->Primitive data types are the set of  basic data types present in javaScript.
-->object in non-premitive data type in javaScript.
-->There are seven primitive data types in javaScript:
1.number    2.null  3.string    4.symbol
5.undefined   6.boolean 7.bigint
*/

let a = null;
let b = 665;
let c = "ask me anything";
let d = Symbol(4);
let e = undefined;
let f = true + false;
let g = BigInt(456);
console.log(a, b, c, d, e, f, g);
console.log(typeof b);

// OBJECT

const items = {
  Aryan: true,
  Aryan2505: undefined,
  "Aryanak9163@gmail.com": null,
  18: false,
  system: false,
};
console.log(items[18]);