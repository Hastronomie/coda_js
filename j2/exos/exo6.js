// const nombres = [15, 8, 23, 4, 42, 10];
// let nbMax= nombres[null];
// function max(nombres)
// {
//     for (let i = 1; i < numbers.length; i++) 
//     {
//         if (nombres[i] > nbMax) {nbMax=nombres[i];}
//     }
//     return nbMax;
// }
// const maximale = max(nombres)
// console.log(`Maximale: ${maximale}`);


const nombres = [15, 8, 23, 4, 42, 10];
let nbMax= nombres[0];
const max = (nombres) => {
    for (let i=0; i<nombres.length; i ++){
        if (nombres[i]> nbMax) {nbMax = nombres[i];}
    }
    return nbMax;
};
let maximum = max(nombres);
console.log(maximum);