export class TaskFormView {
  #formElement;
  #inputElement;
  #submitCallback;

  constructor(formSelector, inputSelector) {
    this.#formElement = document.querySelector(formSelector);
    this.#inputElement = document.querySelector(inputSelector);
    if (!this.#inputElement || !this.#formElement) {
      throw new Error("Formulaire ou champ de saisie non trouvé");
    }
    this.#setupEventListeners();
  }

  #setupEventListeners() {
    //? est pas pareil car jamais appelé au sein de la classe (se fait que sur les privé)
    this.#formElement.addEventListener("submit", (event) => {
      event.preventDefault(); //stop les actions par défaut du navigateur
      const title = this.getTitle();

      if (typeof this.#submitCallback === "function") {
        this.#submitCallback(title);
        this.clear();
      }
    });
  }

  onSubmit(callback) {
    this.#submitCallback = callback;
  }

  getTitle() {
    return this.#inputElement.value.trim();
  }

  clear() {
    return (this.#inputElement.value = "");
    this.#inputElement.focus(); //? focus permet de bien refaire le zoomer sur l'élément pour réécrire dedans apres
  }
}
