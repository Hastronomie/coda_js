const age = Number(prompt("Quel est votre age?"));
if (age >= 20 && age <= 24)
{
    const message = `Petit VIP <3`;
    alert(message);
}
else if (age>=18)
{
    const message = `Vous êtes majeur, bravo je suis fière de vous. Bienvenue ete enjoy ;)`;
    alert(message);
}
else
{
    const message = `Petit filou tu es mineur >:(`;
    alert(message);
}