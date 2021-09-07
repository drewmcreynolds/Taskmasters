import { generateId } from "../Utils/generateId.js"


export class Task{
  constructor(taskData){
    this.taskch = taskData.taskch
    this.name = taskData.name
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
            <input type="checkbox" name="taskch" id="taskkch">
          </div>
          <h4 id="taskId"><span></span>${this.name}</h4>
          <i class="mdi mdi-delete-circle mdi-36px text-primary selectable" 
            onclick="app.tasksController.deleteTask('${this.id}')"></i>
          </div>         
         </div>
        </div>
    `
  }
}