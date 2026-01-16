// const users=
// {
//      fistname: "Sophie", name: "Bernard", age : 28, email : "sophie.bernard@email.com", city : "Marseille", job : "Développeuse",
// }
// for (const user in users) 
// {
//     console.log(`${user}: ${users[user]}`);
// }

// const users=
// [
//     {
//         fistname: "Sophie", name: "Bernard", age : 28, email : "sophie.bernard@email.com", city : "Marseille", job : "Développeuse",
//     },
//     {
//         fistname: "Tony", name: "Starks", age : 10, email : "tony.starks@email.com", city : "Chez lui", job : "Millionaire",
//     },
// ]

// for (const profil of users) 
// {
//     for (const spe in profil) {console.log(`${spe}: ${profil[spe]}`);}
// }


const users = [
    {firstName: "Sphie", name: "Bernsard", age:"28",},
    {fistname: "Tony", name: "Starks", age : 10, email : "tony.starks@email.com", city : "Chez lui", job : "Millionaire",},
];
for (const user of users){
    for (const spe in user){
        console.log(`${spe}:${user[spe]}`);
    }
}











