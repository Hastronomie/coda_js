export const craft = {
    data : {
        time: 0,
        intervale: null,
        bois: 0,
        planches: 0,
        sticky: 0,
        fer: 0,
        lingot: 0,
        epee: 0,
        pioche: 0,
        event: "Choisis (très dur visiblement):",
    },

    elements : {},

    init(container) {

        craft.createElements(container);
        craft.updateDisplay();
        craft.mine().then((can) => {
                                        craft.data.event= message;
                                        craft.updateDisplay();
                                    })
                    .catch((no)=> {
                                    craft.data.event=message;
                                    craft.updateDisplay();
                                    });
        craft.craft().then((can) => {
                                        craft.data.event= message;
                                        craft.updateDisplay();
                                    })
                    .catch((no)=> {
                                    craft.data.event=message;
                                    craft.updateDisplay();
                                    });
    },

    createElements(container) {
        craft.elements.wrapper = document.createElement("div");
        craft.elements.event = document.createElement("p");
        craft.elements.bois = document.createElement("p");
        craft.elements.planches = document.createElement("p");
        craft.elements.sticky = document.createElement("p");
        craft.elements.fer = document.createElement("p");
        craft.elements.lingot = document.createElement("p");
        craft.elements.epee = document.createElement("p");
        craft.elements.pioche = document.createElement("p");

        craft.elements.wrapper.append(
            craft.elements.event,

            craft.elements.bois,
            craft.elements.planches,
            craft.elements.sticky,
            craft.elements.fer,
            craft.elements.lingot,
            craft.elements.epee,
            craft.elements.pioche,
        );

        container.appendChild(craft.elements.wrapper);
    },
    selectElements() {
        craft.elements.btnBois = document.getElementById("btn-mine-bois");
        craft.elements.btnFer = document.getElementById("btn-mine-fer");
        
        craft.elements.btnPlanches = document.getElementById("btn-craft-planches");
        craft.elements.btnSticky = document.getElementById("btn-craft-sticky");
        craft.elements.btnLingot = document.getElementById("btn-craft-lingot");
        craft.elements.btnEpee = document.getElementById("btn-craft-epee");
        craft.elements.btnPioche = document.getElementById("btn-craft-pioche");
    },

    updateDisplay() {
        craft.elements.event.textContent = craft.data.event;

        craft.elements.bois.textContent = "Bois: " + craft.data.bois;
        craft.elements.fer.textContent = "Fer: " + craft.data.fer;
        craft.elements.planches.textContent = "Planches: "+ craft.data.planches;
        craft.elements.sticky.textContent = "Bâtons: "+ craft.data.sticky;
        craft.elements.lingot.textContent = "Lingots de fer: "+ craft.data.lingot;
        craft.elements.epee.textContent = "Épée: "+ craft.data.epee;
        craft.elements.pioche.textContent = "Pioche: "+ craft.data.pioche;
    },

    appear() {

    },

    mine(ressource) {
        craft.data.event = "Minage en cours...";
        craft.updateDisplay();

        // On retourne la promesse pour pouvoir faire .then() ensuite
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 80% de chance de réussite
                const success = Math.random() > 0.2; 

                if (success) {
                    craft.data[ressource]++; // Ajoute +1 à 'bois' ou 'fer'
                    resolve(`Vous avez récupéré du ${ressource} !`);
                } else {
                    reject("Aïe ! Vous vous êtes fait mal...");
                }
            }, 750); // Délai de 0.75 secondes
        });
    },

    // craft () {
    //     if () {

    //     }

    // },

    attachEvents() {
        craft.elements.mineButton.addEventListener("click", craft.boisMine);
        craft.elements.getElementById(`btn-mine-bois.add`).EventListener("click", craft.mine);
        craft.elements.ferButton.addEventListener("click", craft.mine);
        craft.elements.craftButton.addEventListener("click", craft.appear);
    },
}