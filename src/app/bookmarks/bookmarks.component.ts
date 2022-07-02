import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmarks.model';
import { BookmarksService } from '../shared/bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks:Bookmark[]=[]

  constructor(private bookmarksService:BookmarksService) { }

  ngOnInit(): void {
    this.bookmarks=this.bookmarksService.getBookmarks()
  }

}
