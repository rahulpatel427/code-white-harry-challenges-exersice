// let age = 45;
// if (age > 18) {
//   console.log("You can drive.")
// }
// else {
//   console.log("You can't drive.")
// }
let rendom = Math.random();
let a = prompt("Enter the first number:");
let c = prompt("Enter the Operation:");
let b = prompt("Enter Second Number:")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "*",
}
if (rendom > 0.1) {
  alert(`The Result is : ${eval(`${a} ${c} ${b}`)}`)
} else {
  c = obj[c]
}