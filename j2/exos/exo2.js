// const grades = [12, 15, 18, 10, 14, 16];
// let gradesSum = 0;

// for (let i = 0; i < grades.length; i++) {
//     gradesSum += grades[i];
// }
// console.log(`Moyenne ${gradesSum/grades.length}`);


const grades = [12, 15, 18, 10, 14, 16];
let gradesSum = 0;

for (const grade of grades) 
{
    gradesSum += grade;
}
console.log(`Moyenne ${gradesSum/grades.length}`);