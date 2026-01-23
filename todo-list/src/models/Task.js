export class Task {
  #id;
  #title;
  #completed;
  #createdAt;

  constructor(
    title,
    id = crypto.randomUUID(),
    completed = false,
    createdAt = new Date(),
  ) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Le titre ne doit pas être vide.");
    }

    this.#id = id;
    this.#title = title.trim();
    this.#completed = completed;
    this.#createdAt = createdAt;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get completed() {
    return this.#completed;
  }

  get createdAt() {
    return this.#createdAt;
  }

  // * Methode métier

  toggle() {
    this.#completed = !this.#completed;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      completed: this.#completed,
      createdAt: this.#createdAt,
    };
  }

  static fromJSON(json) {
    return new Task(json.title, json.id, json.completed, json.createdAt);
  }

  updateTitle(newTitle) {
    if (typeof newTitle !== "string" || newTitle.trim() === "") {
      throw new Error("Le titre doit être non vide");
    }

    this.#title = newTitle.trim();
  }

  completed(task) {
    if (this.#completed === true) {
      ("task--completed");
    }
  }
}
