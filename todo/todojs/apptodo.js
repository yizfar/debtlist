import { declareViewEvents2 } from "./eventView.js";
import { checkLocal } from "./tasksManeger.js";

window.onload = () => {
  init();
};

const init = () => {
  declareViewEvents2();
  checkLocal();
};

