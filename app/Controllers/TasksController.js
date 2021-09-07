import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController{
  constructor(){
    
  }

  createTask(listId, taskId){
    event.preventDefault()
    let form = event.target
    
    let taskData = {
      name: form.taskName.value,
      taskId: taskId,
      listId: listId
    }
    tasksService.createTask(taskData, taskId)
    console.log('task creation', taskData, taskId);
  }

  deleteTask(taskId){
    tasksService.deleteTask(taskId)
  }
}