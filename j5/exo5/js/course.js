export const run = {
    data : {
        temps: 0,
        intervale: null,
        message: "Choisis (très dur visiblement):",
        marron:{color: "marron",
                time: null,
                },
        blanc:{color: "blanc",
                time: null,
                },
        gris:{color: "gris",
                time: null,
                },
        noir:{color: "noir",
                time: null,
                },
        grison:{color: "grison",
                time: null,
                },
    },

    elements : {},

    init(container) {

        run.createElements(container);
        run.updateDisplay();
        run.run();
        run.lancerCourse()
    },

    createElements(container) {
        run.elements.wrapper = document.createElement("div");
        run.elements.message = document.createElement("p");

        run.elements.wrapper.append(
            run.elements.message,
        );

        container.appendChild(run.elements.wrapper);
    },
    selectElements() {
        run.elements.btnMarron = document.getElementById("marron");
        run.elements.btnBlanc = document.getElementById("blanc");
        run.elements.btnGris = document.getElementById("gris");
        run.elements.btnNoir = document.getElementById("noir");
        run.elements.btnGrison = document.getElementById("grison");
    },

    updateDisplay() {
        run.elements.message.textContent = run.data.message;
    },


    run(event) {
        const btnElement = event.currentTarget;
        const horseColor = btnElement.getAttribute("id");
        run.data.message = "Course en cours...";
        run.updateDisplay();

        return new Promise((resolve, reject) => {
            console.log(`Le cheval a commencé.`);
            
            
            function Course(color, time) {
            intervale = setInterval(() => {
                run.horseColor.time = Math.floor(Math.random() * 4000) + 1000;

                if (color === horseColor && run.horseColor.time > 0.2) {
                    message = (`Le cheval ${run.horseColor.color} n'a pas gagné.`);
                    reject(`Perdu !`);
                } else {
                    message(`Le cheval ${run.horseColor.color} a terminé en ${run.horseColor.time} secondes.`);
                    resolve(`Terminé`);
                }
            }, 1000)
            }
        })
    },

    lancerCourse(event) {
        // Le cheval sur lequel le joueur a cliqué
        const monPari = event.currentTarget.id; 
        run.data.message = `Tu as parié sur ${monPari}. La course démarre...`;
        run.updateDisplay();

        // A. On crée le tableau de promesses (comme ton "const coureurs = [...]")
        // On génère un temps aléatoire pour chaque cheval de la liste
        const tableauDesCourses = run.data.listeChevaux.map(cheval => {
            // Temps aléatoire entre 1000ms (1s) et 4000ms (4s)
            const tempsAleatoire = Math.floor(Math.random() * 3000) + 1000;
            return run.simulerCoureur(cheval, tempsAleatoire);
        });

        // B. On lance Promise.all
        Promise.all(tableauDesCourses)
            .then((resultats) => {
                console.log("Tous les chevaux ont terminé !");
                console.log("Résultats bruts :", resultats);

                // Pour trouver le gagnant, on trie les résultats du plus petit temps au plus grand
                // (a.temps - b.temps)
                resultats.sort((a, b) => a.temps - b.temps);
                
                const gagnant = resultats[0];

                // Affichage du résultat final
                if (gagnant.nom === monPari) {
                    run.data.message = `GAGNÉ ! ${gagnant.nom} l'emporte en ${gagnant.temps/1000}s !`;
                } else {
                    run.data.message = `PERDU... C'est ${gagnant.nom} qui gagne (${gagnant.temps/1000}s).`;
                }
                run.updateDisplay();
            })
            .catch((erreur) => {
                // Si un seul cheval "reject", on arrive ici
                console.error("Course interrompue :", erreur);
                run.data.message = "Accident sur la piste ! " + erreur;
                run.updateDisplay();
            });
    },
        

    attachEvents() {
        run.elements.btnMarron.EventListener("click", run.run);
        run.elements.btnBlanc.EventListener("click", run.run);
        run.elements.btnGris.EventListener("click", run.run);
        run.elements.btnNoir.EventListener("click", run.run)
        run.elements.btnGrison.EventListener("click", run.run);
},
}

const horses = [{ name: "Petit Tonnerre" }, { name: "Petite Flamme" }];
const distance = 100;

const horsesPromises = horses.map(function (horse) {
  return new Promise(function (resolve, reject) {
    let coveredDistance = 0;

    const intervalId = setInterval(function () {
      const randomCoveredDistance = Math.floor(Math.random() * 10);
      coveredDistance += randomCoveredDistance;

      console.log(
        `[${horse.name}] +${randomCoveredDistance}m, total : ${coveredDistance}m`
      );

      if (coveredDistance >= distance) {
        clearInterval(intervalId);
        resolve({
          horseName: horse.name,
          finishMessage: `Le cheval ${horse.name} a terminé la course.`,
        });
      }
    }, 200);
  });
});

Promise.all(horsesPromises).then(function (horsesResults) {
  for (const horseResult of horsesResults) {
    console.log(horseResult.finishMessage);
  }
});

Promise.race(horsesPromises).then(function (fastestHorse) {
  console.log(`${fastestHorse.horseName} a gagné la course.`);
});