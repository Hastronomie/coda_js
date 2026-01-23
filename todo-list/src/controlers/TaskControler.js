import { TaskManager } from "../managers/taskManager";
import { TaskFormView } from "../views/TaskFormView";
import { TaskListView } from "../views/taskList";

export class TaskController {
  #taskManager;
  #taskView;
  constructor() {
    this.#taskManager = new TaskManager();
    this.#taskView = {
      form: new TaskFormView("#task-form", "#task-input"),
      list: new TaskListView("#task-list"),
    };
    this.#init();
  }
  #init() {
    this.#taskManager.on("task:added", (data) => {
      this.#saveToStorage();
      console.log(`Tâche ajoutée : ${data.task.title}`);
    });

    this.#taskManager.on("tasks:changed", (data) => {
      this.#updateAllViews(data.tasks);
    });
    this.#taskView.form.onSubmit((title) => this.#handleAddTask(title));
    this.#loadFromStorage();
    this.#updateAllViews();
  }

  #handleAddTask(title) {
    try {
      this.#taskManager.add(title);
    } catch (error) {
      console.log(error);
    }
  }

  //   #handleDelete(taskId) {
  //     if (confirm("Supprimer ce produit ?")) {
  //       this.#taskManager.remove(taskId);
  //     }
  //   }

  #updateAllViews(tasks = this.#taskManager.getAllToJSON()) {
    this.#taskView.list.render(tasks);
  }

  #saveToStorage() {
    try {
      const json = JSON.stringify(this.#taskManager.getAllToJSON());
      localStorage.setItem("tasks", json);
    } catch (error) {
      console.error("Erreur de save", error);
    }
  }

  #loadFromStorage() {
    try {
      const json = localStorage.getItem("tasks");
      if (json) {
        const data = JSON.parse(json);
        this.#taskManager.loadFromJSON(data);
      }
    } catch (error) {
      console.error("Erreur de save", error);
    }
  }
}
