export const counter ={
                //PROPRIETES
    //stock données
    data: {}, 
    //stock éléments
    elements: {},

                //METHODES
    //initialiser app
    init(container) {
        counter.data.count = 0;

        counter.createElements(container);
        counter.updateDisplay();
        counter.incrementCounter();
        counter.decrementCounter();
        counter.resetCounter();
        counter.attachEvents();
    },

    //créer éléments
    createElements(container) {
        counter.elements.wrapper = document.createElement("div");
        counter.elements.counter = document.createElement("p");

        counter.elements.incrementButton = document.createElement("button");
        counter.elements.incrementButton.textContent = "+1";

        counter.elements.resetButton = document.createElement("button");
        counter.elements.resetButton.textContent = "0";

        counter.elements.decrementButton = document.createElement("button");
        counter.elements.decrementButton.textContent = "-1";

        counter.elements.wrapper.append(
            counter.elements.counter,
            counter.elements.incrementButton,
            counter.elements.resetButton,
            counter.elements.decrementButton,
        );

        container.appendChild(counter.elements.wrapper);

    }, 

    //actualiser
    updateDisplay() {
        counter.elements.counter.textContent = counter.data.count;
    }, 

    //incrémente
    incrementCounter() {
        counter.data.count += 1;
        counter.updateDisplay();
    }, 

    //reset
        resetCounter() {
        counter.data.count = 0;
        counter.updateDisplay();
    }, 

    //decremente
    decrementCounter() {
        counter.data.count -= 1;
        counter.updateDisplay();
    }, 

    //mise en place des écouteurs events
    attachEvents() {
        //1: transmission callback
        counter.elements.incrementButton.addEventListener("click", this.incrementCounter);
        counter.elements.resetButton.addEventListener("click", this.resetCounter);
        counter.elements.decrementButton.addEventListener("click", this.decrementCounter);
        //2: fonction fléchée
        // counter.elements.incrementButton.addEventListener("click", () => { counter.incrementCounter();});
        //3: fonction anonyme
        // counter.elements.incrementButton.addEventListener("click", function () { counter.incrementCounter();});
    }, 
};