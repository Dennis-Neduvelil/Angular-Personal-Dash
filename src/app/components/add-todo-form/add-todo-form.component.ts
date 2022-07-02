import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {

  constructor(private todoService:TodoService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm){
    this.todoService.addTodo(new Todo(form.value.todoText,false))
    this.router.navigateByUrl("/todos")
  }
}
