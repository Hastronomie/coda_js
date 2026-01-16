// function calculateDiscount(price, discountPercentage)
// {
//     priceAfterDis= price * ((100-discountPercentage)/100);
//     return priceAfterDis;
// }

// function calculateShippingFees(weight)
// {
//     if (weight < 1) {return vatRate = 5}
//     else if (weight >= 1 && weight < 5) {return vatRate = 10}
//     else {return vatRate = 15}
// }

// function calculatePriceTTC(priceHT, vatRate) 
// {
//     return priceHT * (1 + vatRate / 100);
// }

// function calculateFinalTotal(priceHT, vatRate, discountPercentage, weight)
// {
//     // finalPrice = priceHT + vatRate +;
// }

let priceHT = Number(prompt("Quel est le prix ?"));
let discountPercentage = Number(prompt("Quel % de réduction ?"));
let weight = Number(prompt("Quel est le poids ?"));
let vatRate = 20;
let price = null;
let fees = null;
let finalPrice= null;

const calculatePriceTTC = (priceHT, vatRate) =>{
    return price = priceHT * (1 + vatRate / 100);
};

const calculateDiscount = (price, discountPercentage) => {
    return price = price * (100 - discountPercentage)/100;
};

const calculateShippingFees = (weight) => {
    if (weight < 1) {fees=5;}
    else if (weight<5) {fees=10;}
    else {fees=15;}
    return fees;
};

const calculateFinalTotal = (priceHT, vatRate, discountPercentage, weight) => {
    calculateShippingFees(weight);
    calculatePriceTTC(priceHT,vatRate);
    price = calculateDiscount(price, discountPercentage);
    finalPrice= price + fees;
    return finalPrice;
};
finalPrice = calculateFinalTotal(priceHT, vatRate, discountPercentage, weight);
alert(finalPrice);
