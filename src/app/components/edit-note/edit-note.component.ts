import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note | any

  constructor(private noteService:NotesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const id=params.get('id')
        this.note = this.noteService.getNote(id)
    });
  }

  onFormSubmit(form:NgForm){
    this.noteService.updateNote(this.note.id,{title:form.value.noteTitle,content:form.value.noteContent})
    this.router.navigateByUrl("/notes")
  }
  onDelete(){
    this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl("/notes")
  }

}
