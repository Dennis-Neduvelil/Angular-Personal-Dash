import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[]=[]

  constructor() { }

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
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  deleteTodo(id:string){
    const todoIndex=this.todos.findIndex(t=>t.id===id)
    if (todoIndex===-1) return
    this.todos.splice(todoIndex,1)
  }

}
