const dark = document.querySelector('.demo-box');

const boxSizes ={
    small: "150px",
    medium: "300px",
    large: "500px"
}

dark.classList.toggle('active');

function toggleRounded() {
dark.classList.toggle("rounded");
}

function toggleShadow() {
dark.classList.toggle("shadow");
}

function toggleBorder() {
dark.classList.toggle("bordered");
}

function toggleGradient() {
dark.classList.toggle("gradient");
}

function changeColor(color) {
    const box = document.getElementById("color");
    dark.style.backgroundColor = color;
}

function changeSize(size) {
    // const box = document.getElementById(".demo-box");
    // let dimensions;
    // switch (size) {
    //     case "small":
    //         dimensions= "150px";
    //         break;
    //     case "medium":
    //         dimensions= "300px";
    //         break;
    //     case "large":
    //         dimensions ="500px";
    //         break;
    // }
    dark.style.width=boxSizes[size];
    dark.style.height=boxSizes[size];
}

function toggleTheme() {
document.body.classList.toggle("dark-theme");
}

function toggleAnimation() {
dark.classList.toggle("animated");
}

function highlightCards(cssClass) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.remove("highlight", "success", "danger");
        card.classList.add(cssClass);
    })
    
}

function resetBox() {
    //dark.className = "demo-box"; //brute
    dark.classList.remove("rounded", "shadow", "gradient", "bordered", "animated");
}