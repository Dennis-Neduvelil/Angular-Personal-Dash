import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes : Note[]

  constructor(private noteService:NotesService) {
    this.notes=noteService.getNotes()
   }

  ngOnInit(): void {
  }

}
