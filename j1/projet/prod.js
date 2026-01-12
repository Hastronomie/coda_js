const stock = `Nous disposons de: \n1: 3x Eau 1€ \n2: 0x Soda 1.50€\n3: 2x Jus 2€\n4: 5x Café 1.20€ `;
alert(stock);

const coin =  Number(prompt("Veuillez insérer votre argent:"));

let nbEau=3;
let nbSoda=0;
let nbJus=2;
let nbCafe=5;

const prixEau=1;
const prixSoda=1.50;
const prixJus=2;
const prixCafe=1.20;


// Si je veux pas faire tout ces if, je fais une variable générique à qui j'assigne selon le choix de l'utilisateur les variables spé
const choix = Number(prompt("Quel produit voulez-vous ?"));

if (choix ===1 && coin>=prixEau && nbEau>0)
{

    const message = `Voici de l'eau !`;
    alert(message);
    nbEau--;
    const rendu = `Je dois vous rendre ${coin - prixEau}`;
    alert(rendu);
}
else if (choix ===2 && coin>=prixSoda && nbSoda>0)
{

    const message = `Voici du soda !`;
    alert(message);
    nbSoda--;
    const rendu = `Je dois vous rendre ${coin - prixSoda}`;
    alert(rendu);
}
else if (choix ===3 && coin>=prixJus && nbJus>0)
{

    const message = `Voici du jus !`;
    alert(message);
    nbJus--;
    const rendu = `Je dois vous rendre ${coin - prixJus}`;
    alert(rendu);
}
else if (choix ===4 && coin>=prixCafe && nbCafe>0)
{

    const message = `Voici du café !`;
    alert(message);
    nbCafe--;
    const rendu = `Je dois vous rendre ${coin - prixCafe}`;
    alert(rendu);
}
else if (choix > 4)
{
    const message = `Auncun produit à ce numéro. Choisissez entre 1 et 4.`;
    alert(message);
}
else 
{
    const message = `Erreur de la transaction`;
    alert(message);
}
