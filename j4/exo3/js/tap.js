export const tap ={
                //PROPRIETES
    //stock données
    data: {
        score: 0,
        timer: 0,
        currentLetter: null, 
        timerInterval: null,
    }, 
    //stock éléments
    elements: {},

                //METHODES
    //initialiser app
    init(container) {
        tap.data.score = -1;
        tap.data.timer = 0;

        tap.createElements(container);
        tap.updateDisplay();
        tap.timer();
        tap.count();
        tap.randomLetter();
        tap.fastTap();
        tap.attachEvents();
    },

    //créer éléments
    createElements(container) {
        tap.elements.wrapper = document.createElement("div");
        tap.elements.wrapper.style.textAlign = "center"
        tap.elements.letter = document.createElement("p");
        tap.elements.timer = document.createElement("p")
        tap.elements.counter = document.createElement("p");
        
        tap.elements.letter.textContent = tap.randomLetter();

        tap.elements.wrapper.append(
            tap.elements.timer,
            tap.elements.letter,
            tap.elements.counter,
        );

        container.appendChild(tap.elements.wrapper);

    }, 

    //actualiserS
    updateDisplay() {
        tap.elements.timer.textContent = `Temps : ${tap.data.timer}s`;
        tap.elements.letter.textContent = tap.data.currentLetter;
        tap.elements.counter.textContent = `Score : ${tap.data.score}`;
    }, 

    //timer
    timer(){
        tap.data.timerInterval = setInterval(() => {
            tap.data.timer++;
            tap.updateDisplay();
        }, 1000);
    },

    //score
    count() {
        tap.updateDisplay();
        tap.data.score++;
    },

    randomLetter() {
        const alphaB= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const randomIndex = Math.floor(Math.random() * alphaB.length);
        tap.data.currentLetter = alphaB[randomIndex];
    },

    //tap
    fastTap() {
        const lettre = tap.elements.letter;
        lettre.style.position = "fixed";
        tap.updateDisplay();
    }, 

    //mise en place des écouteurs events
    attachEvents() {
        //1: transmission callback
        document.addEventListener("keydown",function(event) {

            if (event.key === tap.data.currentLetter) {
                tap.count();
                tap.randomLetter();
                tap.updateDisplay();
            }
            });
    },
};