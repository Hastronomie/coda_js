import { Character } from "./character.js";
import { Item } from "./item.js";
import { Inventory } from "./inventory.js";

async function fetchHeroes() {
    
  try {
    const response = await fetch("http://localhost:3000/heroes");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const heroes = await response.json();

    // console.log("Liste des héros :", heroes);

    for (const hero of heroes) {
      console.log(`${hero.name} - Niveau ${hero.level} - ${hero.class}`);
    }

    return heroes;
  } catch (error) {
    console.error(error);
  }
}

async function newHero() {
    const heroData = await fetchHeroes();

    const heroesInstances = [];

  for (const hero of heroes) {
    const heroInstance = new Character(
      hero.id,
      hero.name,
      hero.class,
      hero.level,
      hero.hp,
      hero.attack,
      hero.defense,
      hero.gold,
    );
    heroesInstances.push(heroInstance);
  }

  return heroesInstances;

//   if (!heroData) {return};
  
//   return heroData.map(hero => new Character(
//       hero.id,
//       hero.name,
//       hero.class,
//       hero.level,
//       hero.hp,
//       hero.attack,
//       hero.defense,
//       hero.gold,
  // ));

}

const item = new Item("Épée longue", "Arme", 150, "Une épée longue en acier trempé.");
heroesInstances.inventory.addItems(item);
console.log(heroesInstances);
heroesInstances.inventory.displayItems();
fetchHeroes();
  
const heroes = await newHero();
