import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-tile',
  templateUrl: './notes-tile.component.html',
  styleUrls: ['./notes-tile.component.scss']
})
export class NotesTileComponent implements OnInit {

  @Input() note : Note

  constructor() { }

  ngOnInit(): void {
  }

}
