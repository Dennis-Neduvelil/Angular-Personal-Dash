import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss']
})
export class TodoTileComponent implements OnInit {

  @Input() todo:Todo

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

  }
  onDelete(id:string){
    this.todoService.deleteTodo(id)
  }

}
