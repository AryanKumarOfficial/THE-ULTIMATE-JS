console.log("javaScript tutorial 3: var,let,const");
var a = 10;
var b = "javaScript";
var c = null;
var d = undefined;
{
  var b = 123;
  console.log(b);
}
console.log(b );
// var is global scope variable unlike let and const
// var can be updated and redecleared whithin its scope
// let can be updated but can't be redecleared
// const neither can't be updated nor re-decleared
// var are initialised with undefined let and const are not initialised
// const must be initialised during the declearation unlike var and let

//-->
{
  var n;
  console.log(n);
  let m;
  console.log(m);
  const xc = undefined;
}
//<-- INITIALISATION SAMPLE
