console.log("jay ma renuka...");
const { error } = require("console");
const fs = require("fs")
// console.log(fs)

console.log("Starting")
// fs.writeFileSync("rahul.txt", "Rahul is a good boy");

// kam se kam writeFileSync use krna he... 
// agr hme use krna he to hm wirteFile ka us krna chahiye...
// agr esi files bohot sari files hue to bar bar    krna hoga jise call back hall kehte he .function ke ander function   
// fs.writeFile("rahul2.txt", "Rahul is a good boy", () => {
//   console.log("done")
//   fs.readFile("rahul.txt", (error, data) => {
//     console.log(error, data.toString())
//   })
// })

fs.appendFile("rahul.txt", "rahulpatel", (e, d) => {

  console.log(d)
})
console.log("Ending") 