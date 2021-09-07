import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController{
  constructor(){
    
  }

  createTask(listId){
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      // @ts-ignore
      name: form.taskName.value,
      listId: listId
    }
    tasksService.createTask(taskData)
    console.log('task creation', taskData);
  }

  deleteTask(taskId){
    tasksService.deleteTask(taskId)
    window.confirm("delete?")
  }
}