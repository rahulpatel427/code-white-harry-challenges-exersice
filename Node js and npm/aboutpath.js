import path from "path"
// console.log(path) 

let myPath = "D:\\Learning Html, css, js\\Node js and npm\\rahul.text";
console.log(myPath);
console.log(path.extname(myPath)) // file ka . extention de dega ki kon se . ke name se save ki gyi he.

console.log(path.dirname(myPath)); // dirname path de dega ki file ka path kya he kaha pr save he file
console.log(path.basename(myPath)) // file ka name dega 
console.log(path.join("c:/", "programs\\rahul.txt")) // ye join krne me help krega / \ koi fark ni pdta