import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js"

function _drawLists(){
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor(){
    console.log("lists controller")
    ProxyState.on('lists', _drawLists)
    ProxyState.on('tasks', _drawLists)
    _drawLists()
  }

  createList(){
    event.preventDefault()
    let form = event.target

    let listData = {
     name: form.listName.value,
    }
    listsService.createList(listData)
    form.reset()
  }

  deleteList(listId){
    listsService.deleteList(listId)
    
  }
  
}
