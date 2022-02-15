import { removeSingleTask } from "./tasksManeger.js";

class Task {
    constructor(_parent,_item){
        this.parent= _parent;
        this.name= _item.name;
        this.time= _item.time;
        this.type= _item.type;

        this.id= _item.id;
    }
    render(){
        let div= document.createElement("div");
        div.className = "shadow-sm my-2 p-2";
        document.querySelector(this.parent).append(div)
        div.innerHTML=`
        <button class=" badge badge-danger float-end border-success text-danger">X</button>
        <h4>${this.name} - ${this.time} - ${this.type }</h4>
        `

        let btn = div.querySelector("button");
        btn.addEventListener("click",()=>{
            removeSingleTask(this.id)
        })
    }
}

export default Task;