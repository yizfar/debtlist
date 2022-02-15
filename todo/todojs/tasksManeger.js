import Task from "./taskClass.js";

const  tasks_ar= [];

export const checkLocal = ()=>{

    if (localStorage["tasks"]){
        tasks_ar.push(...JSON.parse(localStorage["tasks"]));
        createTasks(tasks_ar)
    }
}

export const addTask= (_taskItem) =>{
    tasks_ar.push(_taskItem);
    createTasks(tasks_ar);
}



export  const createTasks= (_ar) => {
    document.querySelector("#id_list").innerHTML= "";
    let sort_ar = _.sortBy(_ar,"time");
    sort_ar.forEach(item => {
     let   task = new Task("#id_list",item)
     task.render(sort_ar)
    });
    saveLocal(sort_ar);
}




export  const resetAlltask =() => {
    tasks_ar.splice(0,  tasks_ar.length)
    createTasks( tasks_ar)
}


export const removeSingleTask = (_idDell)=>{
    tasks_ar.forEach((item,i)=>{
    if(item.id == _idDell){
        tasks_ar.splice(i,1);
    }
    })
    createTasks(tasks_ar)
}

const saveLocal = (_ar)=>{
    localStorage.setItem("tasks",JSON.stringify(_ar));
}