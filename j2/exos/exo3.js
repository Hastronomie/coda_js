const temps = [1, 3, 2, 10, 5, 6, 2];
const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let tempSum = 0;
let tempMax= null;
let tempMin= 999;
let i = 0;

for (const temp of temps) 
{
    console.log(`${jours[i]}: ${temp}`);
    i++;
    tempSum += temp;
    if (temp > tempMax)
    {
        tempMax=temp;
    }
        if (temp < tempMin)
    {
        tempMin=temp;
    }
}
// for (const temp of temps) 
// {

// }

// for (const temp of temps) 
// {

// }

console.log(`Moyenne: ${tempSum/temps.length}`);
console.log(`Maximale: ${tempMax}`);
console.log(`Minimum: ${tempMin}`);