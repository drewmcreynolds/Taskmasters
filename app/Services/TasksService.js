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

  deleteTask(taskId, listId){
    console.log('task delete', taskId, listId)
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId && listId !== taskId, listId)
  }

}

export const tasksService = new TasksService();