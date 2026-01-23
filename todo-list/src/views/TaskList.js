export class TaskListView {
  #containerElement;
  #editCallback;
  #deleteCallback;
  #toggleCallback;

  constructor(containerSelector) {
    this.#containerElement = document.querySelector(containerSelector);
    if (!this.#containerElement) {
      throw new Error("Container non trouvé");
    }
  }

  #createTaskElement(task) {
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");

    const taskToggleElement = document.createElement("input");
    taskToggleElement.classList.add("task-toggle");
    taskToggleElement.setAttribute("type", "checkbox");
    taskToggleElement.dataset.taskId = task.id;
    taskToggleElement.addEventListener("change", () => {
      //! + sécu car suit les disable ect qui respectent les restrictions
      if (typeof this.#toggleCallback === "function") {
        this.#toggleCallback(task.id);
      }
    });
    taskElement.append(taskToggleElement);

    const taskTitleElement = document.createElement("span"); // ! balise <strong> ou <span> mise en avant à l'interrieur d'une div pour faire ressortir un mot spé
    taskTitleElement.classList.add("task-title");
    taskTitleElement.textContent = task.title;
    taskTitleElement.dataset.taskId = task.id;

    const taskActionElement = document.createElement("div");
    taskActionElement.classList.add("task-actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("button", "button--primary");
    taskEditElement.setAttribute("type", "button");
    taskEditElement.textContent = "Modifier";
    taskEditElement.dataset.taskId = task.id;
    taskEditElement.addEventListener("click", () => {
      if (typeof this.#editCallback === "function") {
        this.#editCallback(task.id, task.title);
      }
    });
    taskElement.append(taskTitleElement, taskEditElement);

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("button", "button--danger");
    taskDeleteElement.setAttribute("type", "button");
    taskDeleteElement.textContent = "Supprimer";
    taskDeleteElement.dataset.taskId = task.id;
    taskDeleteElement.addEventListener("click", () => {
      if (typeof this.#deleteCallback === "function") {
        this.#deleteCallback(task.id, task.title);
      }
    });
    taskActionElement.append(taskEditElement, taskDeleteElement);
    taskElement.append(taskTitleElement, taskToggleElement, taskActionElement);

    return taskElement;
  }

  render(tasks) {
    this.#containerElement.innerHTML = "";
    if (tasks.length === 0) {
      this.#renderEmptyState();
      return;
    }

    // *methode 1: on crée, on ajoute, on crée, on ajoute,.... => moins efficasse
    // tasks.forEach((task) => {
    //   const taskElement = this.#createTaskElement(task);
    //   this.#containerElement.appendChild(taskElement);
    // });

    // *methode 2: on créée tout et on ajoute tout => plus opti
    const mapTasks = tasks.map((task) => {
      return this.#createTaskElement(task);
    });
    this.#containerElement.append(...mapTasks);
  }

  #renderEmptyState() {
    const message = document.createElement("p");
    message.textContent = "Aucun message disponible";
    this.#containerElement.appendChild(message);
  }

  onToggle(callback) {
    this.#toggleCallback = callback;
  }

  onDelete(callback) {
    this.#deleteCallback = callback;
  }

  onEdit(callback) {
    this.#editCallback = callback;
  }
}
