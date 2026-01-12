const montant = Number(prompt("Quel est le lontant de l'addition ?"));
const pourcentage = Number(prompt("Quel poucentage laisser à votre super serveur ?"));
const message = `Vous payez donc un total de ${(montant * (pourcentage/100)) + montant} \nVous payez donc un pourboire de ${montant * (pourcentage/100)}`;
alert(message);