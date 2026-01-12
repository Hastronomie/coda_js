function calculateDiscount(price, discountPercentage)
{
    priceAfterDis= price * ((100-discountPercentage)/100);
    return priceAfterDis;
}

function calculateShippingFees(weight)
{
    if (weight < 1) {return vatRate = 5}
    else if (weight >= 1 && weight < 5) {return vatRate = 10}
    else {return vatRate = 15}
}

function calculatePriceTTC(priceHT, vatRate) 
{
    return priceHT * (1 + vatRate / 100);
}

function calculateFinalTotal(priceHT, vatRate, discountPercentage, weight)
{
    // finalPrice = priceHT + vatRate +;
}

let price = Number(prompt("Quel est le prix ?"));
let discountPercentage = Number(prompt("Quel % de réduction ?"));
let weight = Number(prompt("Quel est le poids ?"));
let priceHT = null;
let vatRate = null;
finalPrice= null;

