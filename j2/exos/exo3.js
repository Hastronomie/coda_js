// const temps = [1, 3, 2, 10, 5, 6, 2];
// const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
// let tempSum = 0;
// let tempMax= null;
// let tempMin= 999;
// let i = 0;

// for (const temp of temps) 
// {
//     console.log(`${jours[i]}: ${temp}`);
//     i++;
//     tempSum += temp;
//     if (temp > tempMax)
//     {
//         tempMax=temp;
//     }
//         if (temp < tempMin)
//     {
//         tempMin=temp;
//     }
// }

// console.log(`Moyenne: ${tempSum/temps.length}`);
// console.log(`Maximale: ${tempMax}`);
// console.log(`Minimum: ${tempMin}`);




const temps = [
    {jour: "Lundi", c: 1},
    {jour: "Mardi", c: 8},
    {jour: "Mercredi", c: -1},
    {jour: "Jeudi", c: -5},
    {jour: "Vendredi", c: 0},
    {jour: "Samedi", c: 3},
    {jour: "Dimanche", c: 1},
];
let tempSum = 0;
let tempMax= temps[0].c;
let tempMin= temps[0].c;

for ( const temp of temps) {
    console.log(`${temp.jour}:${temp.c}`);
    tempSum += temp.c;
    if (temp.c > tempMax){tempMax=temp.c;}
    if (temp.c < tempMin){tempMin=temp.c;}
}

console.log(`Moyenne: ${tempSum/temps.length}°C\nMaximum: ${tempMax}°C\nMinimum: ${tempMin}°C`);
