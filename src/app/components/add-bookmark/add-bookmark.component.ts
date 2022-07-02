import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmarks.model';
import { BookmarksService } from 'src/app/shared/bookmarks.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarksService:BookmarksService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    this.bookmarksService.addBookmark(new Bookmark(form.value.bookmarkName,form.value.bookmarkURL))
    this.router.navigateByUrl("/bookmarks")


  }

}
