import { EventEmitter } from "../utils/EventEmitter";
import { Task } from "../models/Task";

export class TaskManager extends EventEmitter {
  #tasks;

  constructor() {
    super(); // ? même si pas de construct parent, on appelle au cas où, pour dire qu'on l'a
    this.#tasks = [];
  }
  // * create
  add(taskTitle) {
    const newTask = new Task(taskTitle);
    this.#tasks.push(newTask);
    this.emit("task:added", { task: newTask });
    this.emit("tasks:changed", { tasks: this.getAllToJSON() });

    return newTask;
  }

  remove(taskId) {
    const taskToDelete = this.getById(taskId);

    if (taskToDelete) {
      this.#tasks = this.#tasks.filtrer((task) => task.id !== taskId);
      this.emit("task:removed", { task: taskToDelete });
      this.emit("tasks:changed", { tasks: this.getAllToJSON() });

      return true;
    } //? équivalent de mettre dans le else car on quitte la fonction

    return false;
  }

  toggle(taskId) {
    const taskToToggle = this.getById(taskId);

    if (taskToToggle) {
      taskToToggle.toggle();
      this.emit("task:toggled", { task: taskToToggle });
      this.emit("tasks:changed", { tasks: this.getAllToJSON() });

      return true;
    }

    return false;
  }

  update(taskId, newTitle) {
    const taskToUpdate = this.getById(taskId);

    if (taskToUpdate) {
      taskToUpdate.updateTitle(newTitle);
      this.emit("task:update", { task: taskToUpdate });
      this.emit("tasks:changed", { tasks: this.getAllToJSON() });

      return true;
    }

    return false;
  }

  getStats(taskId) {
    const taskGetStats = this.getById(taskId);
  }

  getAllToJSON() {
    return this.#tasks.map((task) => task.toJSON());
  }

  loadFromJSON(jsonTask) {
    this.#tasks = jsonTask.map((jsonTask) => Task.fromJSON(jsonTask)); //? tableau instance de task, pour tout récup du localstrorage pour restaurer
    this.emit("task:loaded", { tasks: this.getAllToJSON() });
    this.emit("tasks:changed", { tasks: this.getAllToJSON() });
  }

  getById(taskId) {
    return this.#tasks.find((task) => task.id === taskId);
  }
}
