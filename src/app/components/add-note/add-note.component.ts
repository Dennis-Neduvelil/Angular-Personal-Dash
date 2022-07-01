import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService:NotesService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm){
    this.noteService.addNote(new Note(form.value.noteTitle,form.value.noteContent))
    this.router.navigateByUrl("/notes")
  }
}
