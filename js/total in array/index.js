const num = [4, 5, 6, 76, 4, 3, 2, 5];
let sum = num.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log("The sum is :" + sum)