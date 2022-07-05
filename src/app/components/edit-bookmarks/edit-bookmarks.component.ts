import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmarks.model';
import { BookmarksService } from 'src/app/shared/bookmarks.service';

@Component({
  selector: 'app-edit-bookmarks',
  templateUrl: './edit-bookmarks.component.html',
  styleUrls: ['./edit-bookmarks.component.scss']
})
export class EditBookmarksComponent implements OnInit {

bookmarks:Bookmark[]=[]
bookmark:Bookmark | any

  constructor(private bookmarksService:BookmarksService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.bookmarks=this.bookmarksService.getBookmarks()
    this.route.paramMap.subscribe(params => {
      const id=params.get('id')
      this.bookmark = this.bookmarksService.getBookmark(id)

  })
  }

  onFormSubmit(form:NgForm){
    this.bookmarksService.updateBookmark(this.bookmark.id,{name:form.value.bookmarkName,url:form.value.bookmarkURL})
    this.router.navigateByUrl("/bookmarks")
  }
  onDelete(){
    this.bookmarksService.deleteBookmark(this.bookmark.id)
    this.router.navigateByUrl("/bookmarks")
  }

}
