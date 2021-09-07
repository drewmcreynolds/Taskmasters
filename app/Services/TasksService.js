import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js";


class TasksService{
  constructor(){
    ProxyState.on('tasks', saveState)
    
  }

  createTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log('tasks in proxy', ProxyState.tasks);
  }

  deleteTask(taskId){
    console.log('task delete', taskId)
    
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    console.log(ProxyState.tasks)
  }

}

export const tasksService = new TasksService();