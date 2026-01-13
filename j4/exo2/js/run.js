export const run ={
                //PROPRIETES
    //stock données
    data: {}, 
    //stock éléments
    elements: {},

                //METHODES
    //initialiser app
    init(container) {
        run.data.run = 0;

        run.createElements(container);
        run.updateDisplay();
        run.fastRun();
        run.attachEvents();
    },

    //créer éléments
    createElements(container) {
        run.elements.wrapper = document.createElement("div");

        run.elements.runButton = document.createElement("button");
        run.elements.runButton.textContent = "1 000 000€";

        run.elements.wrapper.append(
            run.elements.runButton,
        );

        container.appendChild(run.elements.wrapper);

    }, 

    //actualiserS
    updateDisplay() {
        // run.elements.run.textContent = run.data.run;
    }, 

    //run
    fastRun() {
            const button = run.elements.runButton;
            const x = Math.random() * (window.innerWidth - button.offsetWidth);
            const y = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.left = x + "px";
            button.style.top = y + "px";
            button.style.position = "fixed";
            run.updateDisplay();
    }, 

    //mise en place des écouteurs events
    attachEvents() {
        //1: transmission callback
        run.elements.runButton.addEventListener("click", run.fastRun);
    }, 
};