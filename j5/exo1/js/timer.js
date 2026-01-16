export const timer = {
    data : {
        time: 0,
        intervale: null,
        minutes: 0,
    },

    elements : {},

    init(container) {
        timer.data.time = 0;
        timer.data.intervale = null;
        timer.data.minutes = 0;

        timer.createElements(container);
        timer.updateDisplay();
        timer.incrementTimer();
        timer.resetTimer();
        timer.stopTimer();
        timer.attachEvents();
    },

    createElements(container) {
        timer.elements.wrapper = document.createElement("div");
        timer.elements.minutes = document.createElement("p")
        timer.elements.timer = document.createElement("p");

        timer.elements.incrementButton = document.createElement("button");
        timer.elements.incrementButton.textContent = "Go mon bébouchou";

        timer.elements.resetButton = document.createElement("button");
        timer.elements.resetButton.textContent = "On recommence";

        timer.elements.stopButton = document.createElement("button");
        timer.elements.stopButton.textContent = "Stop";

        timer.elements.wrapper.append(
            timer.elements.minutes,
            timer.elements.timer,
            timer.elements.incrementButton,
            timer.elements.resetButton,
            timer.elements.stopButton,
        );

        container.appendChild(timer.elements.wrapper);
    },

    updateDisplay() {
        timer.elements.minutes.textContent = timer.data.minutes;
        timer.elements.timer.textContent = timer.data.time;
    },

    incrementTimer() {
        timer.data.intervale = setInterval(() => {
            timer.data.time++;
            timer.updateDisplay();
            if (timer.data.time === 60) {
                timer.data.time = 0;
                timer.data.minutes += 1;
                timer.updateDisplay();
            };
        }, 1000);
    },

    resetTimer() {
        timer.data.time = 0;
        timer.updateDisplay();
    },

    stopTimer() {
        clearInterval(timer.data.intervale);
        timer.updateDisplay();
    },

    attachEvents() {
        timer.elements.incrementButton.addEventListener("click", timer.incrementTimer);
        timer.elements.resetButton.addEventListener("click", timer.resetTimer);
        timer.elements.stopButton.addEventListener("click", timer.stopTimer);
    },
}