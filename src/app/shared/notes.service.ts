import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[]=[]

  constructor() { }

  getNotes(){
    return this.notes
  }

  getNote(id:string | null){
    return this.notes.find(n=>n.id===id)
  }

  updateNote(id: string, updatedFields:Partial<Note>)
  {
    const note = this.getNote(id)
    Object.assign(note,updatedFields)
  }

  addNote(note:Note){
    this.notes.push(note)
  }
  deleteNote(id:string){
    const noteIndex=this.notes.findIndex(n=>n.id===id)
    if (noteIndex===-1) return
    this.notes.splice(noteIndex,1)
  }
}
 