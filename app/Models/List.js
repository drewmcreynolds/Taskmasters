import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List{
  constructor(listData){
    this.color = listData.color
    this.type = listData.type
    this.name = listData.name
    this.id = listData.id || generateId()
  }

  get Template(){
    return /*html*/ `
    <div class="col-lg-4 p-2">
      <div class="card text-center">
        <div class="card-header">
          <div class="d-flex justify-content-between">
          <h4>          
              <span></span>
              ${this.name}
          </h4>
          <i class="mdi mdi-delete-circle mdi-36px text-primary selectable${this.name}" 
            onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              ${this.Tasks}
              </div>
        </div>
        <div class="card-footer">
          <form onsubmit="app.tasksController.createTask('${this.id}')">
            <label for="taskName" class="sr-only"></label>
            <input type="text" name="taskName" minlength="3" maxlength="50" required placeholder="Add A Task" />
            <button type="submit" class="btn btn-success">Add</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get Tasks(){
    let template = ''
    let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    console.log('filter', foundTasks)
    foundTasks.forEach(t => template += t.Template)
    return template
  }
}