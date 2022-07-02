import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[]=[
    new Todo('Fuck some bitch Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions  Lorem Ipsum',true)
  ]

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
