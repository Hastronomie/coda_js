
// const PriceServices = orders.map((amountMore) => amountMore.amount + (amountMore.amount*(10/100)));
// console.log(PriceServices); 

// const delivred = orders.filter((statu) => statu.status === "livrée");
// console.log(delivred);

// const commandes = orders.map((amountMore) => amountMore.amount + (amountMore.amount*(10/100)));
// const delivredAndIn = orders.filter((statu) => statu.status === "livrée" || statu.status === "en cours");
// const sum = delivredAndIn.reduce(
    //     (accumulator, final) => {
        //         return accumulator + final;
        //     },
        //     0
        // );
        // console.log(sum);
        
const orders = 
[
 { id: 1, customer: "Alice", amount: 150, status: "livrée", products: 3 },
 { id: 2, customer: "Bob", amount: 85, status: "en cours", products: 2 },
 { id: 3, customer: "Charlie", amount: 200, status: "livrée", products: 5 },
 { id: 4, customer: "Diana", amount: 45, status: "annulée", products: 1 },
 { id: 5, customer: "Alice", amount: 120, status: "livrée", products: 2 }
];

const prixTot = orders.map((amountMore) => amountMore.amount + (amountMore.amount * (10/100)));
console.log(prixTot)

const delivred = orders.filter((livrees) => livrees.status == "livrée");
console.log(delivred)

const ca = orders.reduce(
    (accumulator, order) => {
        return accumulator + order.amount;
    },
    0
);

console.log(ca);

const idTrois = orders.find(
    (order) => order.id === 3
);
console.log(idTrois);

orders.sort((a,b) => b.amount-a.amount);
console.log(orders)




