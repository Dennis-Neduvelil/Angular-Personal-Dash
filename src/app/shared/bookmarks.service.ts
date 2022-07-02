import { Injectable } from '@angular/core';
import { Bookmark } from './bookmarks.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  bookmarks:Bookmark[]=[
    new Bookmark('Google','https://www.google.com/'),
    new Bookmark('Facebook','https://www.facebook.com/'),
    new Bookmark('Google','https://www.google.com/'),
    new Bookmark('Facebook','https://www.facebook.com/'),
    new Bookmark('Google','https://www.google.com/'),
    new Bookmark('Facebook','https://www.facebook.com/'),
  ]

  constructor() { }

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
  }

  addBookmark(bookmark:Bookmark){
    this.bookmarks.push(bookmark)
  }
  deleteBookmark(id:string){
    const bookmarkIndex=this.bookmarks.findIndex(b=>b.id===id)
    if (bookmarkIndex===-1) return
    this.bookmarks.splice(bookmarkIndex,1)
  }
}
