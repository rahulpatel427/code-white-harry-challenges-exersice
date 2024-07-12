// 1. The Magical sorting hat: imagine you are creating a magical sorting hat for a wizard school.implement a javaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw (length less than 12), Or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Rahul", "Anjali", "Arun", "Shubham", "Shivangi", "Annupurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "Ram", "Ramanand"];

let house = [];
for (const student of students) {
  if (student.length < 6) {
    house.push({ name: student, house: "Gryffindor" });
  } else if (student.length < 8) {
    house.push({ name: student, house: "Hufflepuff" });
  } else if (student.length < 12) {
    house.push({ name: student, house: "Ravenclaw" });
  } else {
    house.push({ name: student, house: "Slytherin" });
  }
}

console.log(house);