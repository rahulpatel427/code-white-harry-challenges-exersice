import fs from "fs/promises"
let a = await fs.readFile("rahul2.txt");
//let b = await fs.writeFile("rahul2.txt", "jay ma renuka good")
// writeFile ka use karete he to hm jo content tha wo delete hoke new content aa jaega jo hmne dala he ..

let b = await fs.appendFile("rahul2.txt", "jay ma renuka");
console.log(b)
// ab agr old content me add krna he to appendFile krna hoga.

console.log(a.toString())