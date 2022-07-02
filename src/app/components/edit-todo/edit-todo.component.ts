import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo : Todo | any

  constructor(private todoService:TodoService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id=params.get('id')
      this.todo = this.todoService.getTodo(id)
  });
  }

  onFormSubmit(form:NgForm){
    this.todoService.updateTodo(this.todo.id,{text:form.value.todoText})
    this.router.navigateByUrl("/todos")
  }

}
