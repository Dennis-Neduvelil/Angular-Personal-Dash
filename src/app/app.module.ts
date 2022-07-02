import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarksTileComponent } from './components/bookmarks-tile/bookmarks-tile.component';
import { TodoTileComponent } from './components/todo-tile/todo-tile.component';
import { NotesTileComponent } from './components/notes-tile/notes-tile.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './components/manage-bookmarks/manage-bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarksTileComponent,
    TodoTileComponent,
    NotesTileComponent,
    AddNoteComponent,
    EditNoteComponent,
    AddButtonComponent,
    AddTodoFormComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
