// const products = 
// [
//  { name: "Clavier", price: 45, inStock: true },
//  { name: "Souris", price: 25, inStock: false },
//  { name: "Écran", price: 250, inStock: true },
// ];
// let priceSum = null;
// let i = 0;

// for (const product of products) 
// {
//     if (product.inStock == true)
//     {
//         priceSum += product.price;
//         i++;
//     }
// }
// console.log(`Moyenne: ${priceSum/i}`);



// const products = 
// [
//  { name: "Clavier", price: 45, inStock: true },
//  { name: "Souris", price: 25, inStock: false },
//  { name: "Écran", price: 250, inStock: true },
// ];

// let sum = 0;
// let i = 0;

// for (const product of products) {
//     // for (const spe in product) {
//         if (product.inStock ==true) {sum += product.price; i++;}
//     // }
// }

// console.log(`Moyenne: ${sum/i}`);

const ecole = [
    {lastName: "kk", firstName: "Mark", grades : [1,2,3,4], mention: "",},
    {lastName: "lala", firstName: "Lilie", grades : [5,6,7,8], mention: "",},
    {lastName: "bb", firstName: "Anne", grades : [9,10,11,12], mention: "",},
    {lastName: "cc", firstName: "Luc", grades : [13,14,15,16], mention: "",},
    {lastName: "qq", firstName: "Nina", grades : [17,18,19,20], mention: "",},
]
let sum = 0

let sumTot = 0;
let pire = 20;
let mieux = 0;

for (const eleve of ecole) {
    for (const note of eleve.grades) {sum+=note;}
    if (mieux < sum/eleve.grades.length ){mieux = sum/eleve.grades.length;}
    if (pire > sum/eleve.grades.length) {pire = sum/eleve.grades.length;}
    if (sum/eleve.grades.length >=16) {eleve.mention = "TB";}
    else if (sum/eleve.grades.length >=14) {eleve.mention = "B";}
    else if (sum/eleve.grades.length >=12) {eleve.mention = "AB";}
    else if (sum/eleve.grades.length >=10) {eleve.mention = "P";}
    else if (sum/eleve.grades.length <10) {eleve.mention = "I";}
    sumTot += sum/eleve.grades.length;
    console.log(`${eleve.firstName}: ${sum/eleve.grades.length} = ${eleve.mention}`);
    sum=0;
}

console.log(`mieux: ${mieux}\npire: ${pire}\nMoyenne Totale: ${sumTot/ecole.length}`);