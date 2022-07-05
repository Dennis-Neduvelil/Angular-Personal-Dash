import { Injectable } from '@angular/core';
import { Bookmark } from './bookmarks.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  bookmarks:Bookmark[]=[]

  constructor() { 
    this.loadState()
  }

  getBookmarks(){
    return this.bookmarks
  }

  getBookmark(id:string | null){
    return this.bookmarks.find(b=>b.id===id)
  }

  updateBookmark(id: string, updatedFields:Partial<Bookmark>)
  {
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark,updatedFields)
    this.saveState()
  }

  addBookmark(bookmark:Bookmark){
    this.bookmarks.push(bookmark)
    this.saveState()
  }
  deleteBookmark(id:string){
    const bookmarkIndex=this.bookmarks.findIndex(b=>b.id===id)
    if (bookmarkIndex===-1) return
    this.bookmarks.splice(bookmarkIndex,1)
    this.saveState()
  }
  saveState(){
    localStorage.setItem('bookmarks',JSON.stringify(this.bookmarks))
  }

  loadState(){
    const bookmarksInStorage=JSON.parse(localStorage.getItem('bookmarks') || '[]')
    this.bookmarks=bookmarksInStorage
  }
}
