const products = 
[
 { name: "Clavier", price: 45, inStock: true },
 { name: "Souris", price: 25, inStock: false },
 { name: "Écran", price: 250, inStock: true },
];
let priceSum = null;
let i = 0;

for (const product of products) 
{
    if (product.inStock == true)
    {
        priceSum += product.price;
        i++;
    }
}
console.log(`Moyenne: ${priceSum/i}`);