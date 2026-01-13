let nb = Number(prompt("Donne un nombre:"));
let i = 0;
while (nb>0)
{
    nb = nb/10;
    i++;
}

const message = `${i} chiffres`;
alert(message);