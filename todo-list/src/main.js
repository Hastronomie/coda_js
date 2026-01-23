import "./style.css";
import { TaskController } from "./controlers/TaskControler.js";
import { Task } from "./models/Task.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = new TaskController();

  console.log("App initialisée");
});

// const tache1json = {
//   title: "première tâche",
// };

// const tache1 = Task.fromJSON(tache1json);
// console.log(tache1.completed);
// tache1.toggle();
// console.log(tache1.completed);
// tache1.updateTitle("nouveau");
// console.log(tache1.toJSON());
