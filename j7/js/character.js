export class Character {
    #id;
    #name;
    #class;
    #level;
    #hp;
    #hpMax;
    #attack;
    #defense;
    #gold;
    #inventory;
    construct(id, name, classe, level, hp, attack, defense, gold){
        this.#id = id;
        this.#name = name;
        this.#class = classe;
        this.#level = level;
        this.#hp = hp;
        this.#hpMax = hpMax;
        this.#attack = attack;
        this.#defense = defense;
        this.#gold = gold;
        this.#inventory = new Map();
    }

    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }

    getName() {
        return this.#name;
    }
    setName(name) {
        if (name.trim().length < 3) {
            throw new Error("Plus long le nom")
        }
        if (name == null || name == undefined) {
            throw new Error("Tu es quelqu'un")
        }
        this.#name = name.trim();
    }

    getClass() {
        return this.#class;
    }
    setClass(classe) {
        if (classe == null || classe == undefined) {
            throw new Error("Mais si tu es quelque chose")
        }
        this.#class = classe;
    }

    getLevel() {
        return this.#level;
    }
    setLevel(level) {
        if (Number.isNaN(Number(level))) {
            throw new Error("Il faut un nombre par contre");
        }
        if (level < 1) {
            throw new Error("Tu es forcément mieux que 0")
        }
        this.#level = level;
    }

    getHpMax() {
        return this.#hpMax;
        return this.#hp;
    }
    setHp(hpMax) {
        if (Number.isNaN(Number(hpMax))) {
            throw new Error("Il faut un nombre par contre");
        }
        if (hpMax < 1) {
            throw new Error("Meurs pas :(")
        }
        this.#hpMax = hpMax;
        this.#hp = hp;
    }

    getAttack() {
        return this.#attack;
    }
    setAttack(attack) {
        if (attack < 1) {
            throw new Error("Je sais que t'es fort")
        }
        this.#attack = attack;
    }

    getDefense() {
        return this.#defense;
    }
    setDefense(defense) {
        if (defense < 1) {
            throw new Error("Tu n'es pas sans défense")
        }
        this.#defense = defense;
    }

    getGold() {
        return this.#gold;
    }
    setGold(gold) {
        if (gold < 1) {
            throw new Error("On ne fait pas de crédit zebi")
        }
        this.#gold = gold;
    }

    getisAlive(hp) {
        if (hp > 0) return true;
    }

    getHpPourcentage(hp) {
        const pourcent=  Math.max(0,Math.min(100,(this.#hp/this.#hpMax)*100));
        return `${pourcent,toFixed(1)}%`;
    }

    getInventory() {
        return this.#inventory;
    }
    setInventory(inventory) {
        this.#inventory = new Map(inventory);
    }

    // additem(item){
    //     this.#inventory.set(item.getName(), item);
    // }

    // deleteitem(item){
    //     this.#inventory.delete(item.getName());
    // }

    // displayitem() {
    //     this.inventory.forEach(item => {
    //         console.group(`${item}`);
    //     });
    //     console.groupEnd(); 
    // }
}