import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{
  constructor(){
    ProxyState.on('lists', saveState)
  }
  createList(listData){
    ProxyState.lists = [...ProxyState.lists, new List(listData)]
    console.log('lists in proxy', ProxyState.lists)
  }

  deleteList(listId){
    console.log('list delete', listId)
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId) 
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId !== listId)
  }
}

export const listsService = new ListsService();