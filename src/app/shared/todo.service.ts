import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[]=[]

  constructor() {
    this.loadState()
   }

  getTodos(){
    return this.todos
  }

  getTodo(id:string | null){
    return this.todos.find(t=>t.id===id)
  }

  updateTodo(id: string, updatedFields:Partial<Todo>)
  {
    const todo = this.getTodo(id)
    Object.assign(todo,updatedFields)
    this.saveState()
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
    this.saveState()
  }
  deleteTodo(id:string){
    const todoIndex=this.todos.findIndex(t=>t.id===id)
    if (todoIndex===-1) return
    this.todos.splice(todoIndex,1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('todo',JSON.stringify(this.todos))
  }

  loadState(){
    const todosInStorage=JSON.parse(localStorage.getItem('todo') || '[]')
    console.log(todosInStorage)
    this.todos=todosInStorage
  }

}
