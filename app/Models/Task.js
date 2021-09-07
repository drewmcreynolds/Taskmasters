import { generateId } from "../Utils/generateId.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name
    this.taskId = taskData.taskId
    this.listId = taskData.listId
    this.id = taskData.id || generateId()
  }

  get Template(){
    return /*html*/ `
    <div class="row p-2 ">
      <div class="card text-center">       
          <div class="d-flex justify-content-between">
          <div class="form-group">
            <label for="taskch" class=""></label>
            <input type="checkbox" name="taskch" id="taskch">
          </div>
          <h4 id="taskId"><span></span>${this.name}</h4>
          <i class="mdi mdi-delete-circle mdi-36px text-primary selectable ${this.taskId} ${this.name} ${this.id}" 
            onclick="app.tasksController.deleteTask('${this.id} ${this.name} ')"></i>
          </div>         
         </div>
        </div>
    `
  }
}