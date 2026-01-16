async function fetchHeroes() {
    try {
        const response = await fetch("http://localhost:3000/heroes");

        if (!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const heroes = await response.json();

        console.log("liste:", heroes);

        for (const hero of heroes) {
            console.log(`${hero.name}, Niveau: ${hero.level}, ${hero.class}`);
        }
    } catch {
        console.error(error);
    }
}

fetchHeroes();