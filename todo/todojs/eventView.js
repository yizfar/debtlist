import { addTask, resetAlltask } from "./tasksManeger.js";

export const declareViewEvents2 = () => {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");

  add_btn.addEventListener("click", () => {
    let taskItem =  {
        name: document.querySelector("#id_name").value,
        time: document.querySelector("#id_time").value,
        type: document.querySelector("#id_type").value,
        id:Date.now()
    }
    console.log(taskItem)
    addTask(taskItem)
  });

  reset_btn.addEventListener("click", ()=>{
    if(confirm("Are you sure to RESET??")){
      resetAlltask();
    }
  })
};
