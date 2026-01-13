const name = prompt("Quel est votre nom ?");
const age = prompt("Quel votre age ?");

const section = document.getElementById('user-infos');
section.innerHTML= `<p>Bonjour, je suis ${name} et j ai ${age} ans</p>`;