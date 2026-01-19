export class Inventory {
    #items;

    constructor(items) {
        this.#items = new Map(items);
    }

    getItems() {
        return this.#items;
    }

    setItems(items) {
        this.#items = new Map(items);
    }

    addItems(items){
        this.#items.set(items.getName(), items);
    }

    deleteItems(items){
        this.#items.delete(items.getName());
    }

    displayItems() {
        this.items.forEach(item => {
            console.group(`${item}`);
        });
        console.groupEnd(); 
    }
}