export const fight = {
    data : {
        time: 0,
        intervale: null,
        hpPlayer: 100,
        hpMonster: 100,
        attackPlayer: 7,
        attackMonster: 15,
        winner: "Combat en cours...",
    },

    elements : {},

    init(container) {
        fight.data.hpPlayer= 100,
        fight.data.hpMonster= 100,
        fight.data.intervale = null;
        fight.data.attackPlayer= 7,
        fight.data.attackMonster= 15,
        fight.data.winner="Combat en cours...";

        fight.createElements(container);
        fight.updateDisplay();
        fight.attackFight().then((winMessage) => {
                                                    fight.data.winner= winMessage;
                                                    fight.updateDisplay();
                                                })
                            .catch((looseMessage)=> {
                                                        fight.data.winner=looseMessage;
                                                    fight.updateDisplay();
                                                })
    },

    createElements(container) {
        fight.elements.wrapper = document.createElement("div");
        fight.elements.player = document.createElement("p")
        fight.elements.player.style.color ="blue";
        fight.elements.monster = document.createElement("p");
        fight.elements.monster.style.color = "red"; 
        fight.elements.winner = document.createElement("p");
        fight.elements.winner.style.fontSize = "20px"; 

        fight.elements.wrapper.append(
            fight.elements.player,
            fight.elements.monster,
            fight.elements.winner,
        );

        container.appendChild(fight.elements.wrapper);
    },

    updateDisplay() {
        fight.elements.player.textContent = fight.data.hpPlayer;
        fight.elements.monster.textContent = fight.data.hpMonster;
        fight.elements.winner.textContent = fight.data.winner;
    },

    attackFight() {
        return new Promise((resolve, reject) => {

        fight.data.intervale = setInterval(() => {
        fight.data.hpPlayer -= Math.floor(Math.random() * (fight.data.attackMonster - 1) + 1);
        fight.data.hpMonster -= fight.data.attackPlayer;
        fight.data.time++;
        fight.updateDisplay();
        if (fight.data.hpPlayer <= 0) {
            reject("Le bien a été vaincu..");
            clearInterval(fight.data.intervale);
        }
        else if (fight.data.hpMonster <= 0) {
            resolve("Bravo vous avez tuer le mal !")
            clearInterval(fight.data.intervale);
        };
        }, 750);
        });

    },
}