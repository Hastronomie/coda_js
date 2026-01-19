export class Item {
    #name;
    #type;
    #value;
    #description;

    constructor(name, type, value, description)  {
        this.#name = name;
        this.#type = type;
        this.#value = value;
        this.#description = description;
    }

    displayInfo() {
        console.group(`[${this.#type}] ${this.#name} - ${this.#value}`);
        console.log(`${this.#description}`);
        console.groupEnd(); 
    }
}